"use client";

import React, { useState } from "react";
import { getOwnedNFTs } from "../../foundry/src/Contract";

export const Dashboard = () => {
  //   const [nftContract, setNFTContract] = useState("");
  const [ownedNFTs, setOwnedNFTs] = useState([]);

  const fetchNFTs = async () => {
    try {
      // Checking if the wallet is already conncected.
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length === 0) {
        console.error(
          "No accounts has been found, Please connect your Wallet!"
        );
        return; // Exit.
      }

      const owner = accounts[0];
      const tokenIds = await getOwnedNFTs(nftContract, owner);
      setOwnedNFTs[tokenIds];
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchNFTs}>Fetch NFTs</button>
      {ownedNFTs.map((id) => (
        <div key={id}>Token ID: {id}</div>
      ))}
    </div>
  );
};
