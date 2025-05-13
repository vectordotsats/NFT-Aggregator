# Project Name

NFT AGGREGATOR.

## About this Project.

This project covers the complete process for developing an NFT Aggregator DApp that connects to user wallets, fetches all owned NFTs, and displays trading information across marketplaces. This functionality gives users a centralized view of their NFT portfolio along with actionable trading opportunities.

## Features

- Fetches NFTs on Connection of Wallet.
- Displays all possessed NFTs, outlining which can be traded and which can't be traded.
- Displays the Marketplaces where these NFTs can be traded at.

### Prerequisites

- Openzeppelin
- Git
- Foundry

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vectordotsats/NFT-Aggregator
```

2. Navigate to the project directory:

```bash
cd Nft-Aggregator
```

3. Navigate to the project directory:

```bash
curl -L https://foundry.paradigm.xyz | bash
forge install OpenZeppelin/openzeppelin-foundry-upgrades
forge install OpenZeppelin/openzeppelin-contracts-upgradeable
```

4. Navigate to foundry.toml

```bash
@openzeppelin/contracts/=lib/openzeppelin-contracts-upgradeable/lib/openzeppelin-contracts/contracts/,
@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/
```

## Purpose of This NFT Aggregator

- Connects to a user's wallet.
- Fetches all NFTs owned by the user accross multiple marketplaces and multiple chains.
- Displays trading information(e.g., price, marketplace, etc.).
- Allow users to interact with NFTs (e.g., buy, sell or transfer).
