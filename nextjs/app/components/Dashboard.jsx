import React, { useState } from "react";
import { getOwnedNFTs } from "/foundry/src/Contract.jsx";

const Dashboard = () => {
  const [nftContract, setNFTContract] = useState("");
  const [ownedNFTs, setOwnedNFTs] = useState([]);

  const fetchNFTs = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const owner = accounts[0];
    const tokenIds = await getOwnedNFTs(nftContract, owner);
    setOwnedNFTs[tokenIds];
  };

  return <div></div>;
};

export default Dashboard;
