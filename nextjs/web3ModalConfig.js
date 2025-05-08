import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism } from 'wagmi/chains';

// Define the chains you want to support
const chains = [mainnet, polygon, arbitrum, optimism];

// WalletConnect Project ID (from WalletConnect Cloud)
const projectId = '654ed6aaf9458ed9e872a2e77977bd9d';

// Configure chains and providers
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

// Create a wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

// Create an Ethereum client for Web3Modal
export const ethereumClient = new EthereumClient(wagmiClient, chains);

// Web3Modal component
export const Web3ModalProvider = () => (
  <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
);