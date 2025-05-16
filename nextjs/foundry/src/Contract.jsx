import { ethers } from "ethers";

const contractAddress = "0x4C0c1E72d51433e2B04b1d0cBd234F3b9b78585b";
const contractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "checkNFTOwnership",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
];

export const getOwnedNFTs = async (nftContract, owner) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );
    const tokenIds = await contract.checkNFTOwnership(nftContract, owner);
    return tokenIds;
  } catch (error) {
    console.error("Error fetching owned NFTs:", error);
    return [];
  }
};

// export default getOwnedNFTs;
