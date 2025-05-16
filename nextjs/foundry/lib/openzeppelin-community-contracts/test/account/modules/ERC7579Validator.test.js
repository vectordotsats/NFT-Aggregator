const { ethers, entrypoint } = require('hardhat');
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { impersonate } = require('@openzeppelin/contracts/test/helpers/account');
const { getDomain } = require('@openzeppelin/contracts/test/helpers/eip712');
const { ERC4337Helper } = require('../../helpers/erc4337');
const { PackedUserOperation } = require('../../helpers/eip712-types');

const { MODULE_TYPE_VALIDATOR } = require('@openzeppelin/contracts/test/helpers/erc7579');
const { shouldBehaveLikeERC7579Module, shouldBehaveLikeERC7579Validator } = require('./ERC7579Module.behavior');

async function fixture() {
  const [other] = await ethers.getSigners();

  // Deploy ERC-7579 validator module
  const mock = await ethers.deployContract('$ERC7579SignatureValidator');

  // ERC-4337 env
  const helper = new ERC4337Helper();
  await helper.wait();
  const entrypointDomain = await getDomain(entrypoint.v08);

  // Prepare signer
  const signer = ethers.Wallet.createRandom();
  const signUserOp = userOp =>
    signer
      .signTypedData(entrypointDomain, { PackedUserOperation }, userOp.packed)
      .then(signature => Object.assign(userOp, { signature }));

  // Prepare module installation data
  const installData = ethers.solidityPacked(['address'], [signer.address]);

  // ERC-7579 account
  const mockAccount = await helper.newAccount('$AccountERC7579');
  const mockFromAccount = await impersonate(mockAccount.address).then(asAccount => mock.connect(asAccount));

  return {
    moduleType: MODULE_TYPE_VALIDATOR,
    mock,
    mockFromAccount,
    mockAccount,
    other,
    signer,
    signUserOp,
    installData,
  };
}

describe('ERC7579Validator', function () {
  beforeEach(async function () {
    Object.assign(this, await loadFixture(fixture));
  });

  describe('ECDSA key', function () {
    shouldBehaveLikeERC7579Module();
    shouldBehaveLikeERC7579Validator();
  });
});
