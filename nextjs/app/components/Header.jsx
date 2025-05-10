import React from 'react';
import { RxStitchesLogo } from "react-icons/rx";
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";



const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const Header = () => {
  return (
    <header className="flex justify-between items-center gap-4 mt-4 mb-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center gap-1 cursor-pointer">
        <RxStitchesLogo size={40} />
        <div className="text-xl uppercase font-semibold">Nerfed</div>
      </div>
      {/* <div></div> */}
      <ConnectButton />
      {/* <button className="text-lg capitalize font-semibold py-1 px-2 border rounded-lg cursor-pointer">Connect Wallet</button> */}
    </header>
  )
}