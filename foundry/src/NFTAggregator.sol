// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title NFTAggregator
 * @author Vectordotsats
 * @notice This is an aggregator contract for NFTs. It allows users to view and manage all their NFTs in one place.
 * @dev This contract is a work in progress and is not yet complete.
 */

contract NFTAggregator {
    constructor() {}

    function checkNFTOwnership(
        address _nftContract,
        address _owner
    ) public view returns (uint256[] memory) {
        IERC721 nft = IERC721(_nftContract);
        uint256 balance = nft.balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](balance);

        uint256 index = 0;
        for (uint256 i = 0; i < balance; i++) {
            if (nft.ownerOf(i) == _owner) {
                tokenIds[index] = i;
                index++;
                if (index == balance) break;
            }
        }
        return tokenIds;
    }
}

// Tx Hash: 0x99b211fd6527c8f49c1605949100090da199ec0da4748a6946fc4cfbc4dca0ff
// Deployed to: 0x47016EE0F4a17dcc86A76567EbB16a409D0C8d7f
// Deployer: 0x4C0c1E72d51433e2B04b1d0cBd234F3b9b78585b
