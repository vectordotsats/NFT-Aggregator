// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ERC7739} from "../../../utils/cryptography/ERC7739.sol";
import {SignerRSA} from "../../../utils/cryptography/SignerRSA.sol";

contract ERC7739RSAMock is ERC7739, SignerRSA {
    constructor(bytes memory e, bytes memory n) EIP712("ERC7739RSA", "1") {
        _setSigner(e, n);
    }
}
