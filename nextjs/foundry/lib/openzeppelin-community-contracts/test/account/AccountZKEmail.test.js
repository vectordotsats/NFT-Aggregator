const { ethers } = require('hardhat');
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

const { ERC4337Helper } = require('../helpers/erc4337');

const { shouldBehaveLikeAccountCore, shouldBehaveLikeAccountHolder } = require('./Account.behavior');
const { shouldBehaveLikeERC1271 } = require('../utils/cryptography/ERC1271.behavior');
const { shouldBehaveLikeERC7821 } = require('./extensions/ERC7821.behavior');
const { ZKEmailSigningKey, NonNativeSigner } = require('../helpers/signers');

const accountSalt = '0x046582bce36cdd0a8953b9d40b8f20d58302bacf3bcecffeb6741c98a52725e2'; // keccak256("test@example.com")
const selector = '12345';
const domainName = 'gmail.com';
const publicKeyHash = '0x0ea9c777dc7110e5a9e89b13f0cfc540e3845ba120b2b6dc24024d61488d4788';
const emailNullifier = '0x00a83fce3d4b1c9ef0f600644c1ecc6c8115b57b1596e0e3295e2c5105fbfd8a';
const templateId = ethers.solidityPackedKeccak256(['string', 'uint256'], ['TEST', 0n]);

const SIGN_HASH_COMMAND = 'signHash';

async function fixture() {
  // EOAs and environment
  const [admin, beneficiary, other] = await ethers.getSigners();
  const target = await ethers.deployContract('CallReceiverMockExtended');

  // Registry
  const dkim = await ethers.deployContract('ECDSAOwnedDKIMRegistry');
  await dkim.initialize(admin, admin);
  await dkim
    .SET_PREFIX()
    .then(prefix => dkim.computeSignedMsg(prefix, domainName, publicKeyHash))
    .then(message => admin.signMessage(message))
    .then(signature => dkim.setDKIMPublicKeyHash(selector, domainName, publicKeyHash, signature));

  // Verifier
  const verifier = await ethers.deployContract('ZKEmailVerifierMock');

  // ERC-4337 signer
  const signer = new NonNativeSigner(
    new ZKEmailSigningKey(domainName, publicKeyHash, emailNullifier, accountSalt, templateId),
  );

  // ERC-4337 account
  const helper = new ERC4337Helper();
  const mock = await helper.newAccount('$AccountZKEmailMock', [accountSalt, dkim.target, verifier.target, templateId]);

  const signUserOp = async userOp => {
    // Create email auth message for the user operation hash
    const hash = await userOp.hash();
    return Object.assign(userOp, { signature: signer.signingKey.sign(hash).serialized });
  };

  const invalidSig = async () => {
    // Create email auth message for the user operation hash
    const hash = ethers.ZeroHash;
    const timestamp = Math.floor(Date.now() / 1000);
    const command = SIGN_HASH_COMMAND + ' ' + ethers.toBigInt(hash).toString();
    const isCodeExist = true;
    const proof = '0x00'; // Mocked in ZKEmailVerifierMock

    // Encode the email auth message as the signature
    return ethers.AbiCoder.defaultAbiCoder().encode(
      ['tuple(uint256,bytes[],uint256,tuple(string,bytes32,uint256,string,bytes32,bytes32,bool,bytes))'],
      [
        [
          templateId,
          [hash],
          0, // skippedCommandPrefix
          [domainName, publicKeyHash, timestamp, command, emailNullifier, accountSalt, isCodeExist, proof],
        ],
      ],
    );
  };

  return { helper, mock, dkim, verifier, target, beneficiary, other, signUserOp, invalidSig, signer };
}

describe('AccountZKEmail', function () {
  beforeEach(async function () {
    Object.assign(this, await loadFixture(fixture));
  });

  shouldBehaveLikeAccountCore();
  shouldBehaveLikeAccountHolder();
  shouldBehaveLikeERC1271({ erc7739: true });
  shouldBehaveLikeERC7821();
});
