import React from 'react';
import { RxStitchesLogo } from "react-icons/rx";
import { WalletConnect } from './WalletConnection.jsx';

export const Header = () => {
  return (
    <header className="flex justify-between items-center gap-4 mt-4 mb-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center gap-1 cursor-pointer">
        <RxStitchesLogo size={40} />
        <div className="text-xl uppercase font-semibold">Nerfed</div>
      </div>
      {/* <div></div> */}
      
      <WalletConnect />
      {/* <button className="text-lg capitalize font-semibold py-1 px-2 border rounded-lg cursor-pointer">Connect Wallet</button> */}
    </header>
  )
}