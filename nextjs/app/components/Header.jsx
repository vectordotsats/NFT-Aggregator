import React from 'react';
import { RxStitchesLogo } from "react-icons/rx";

export const Header = () => {
  return (
    <header className="flex justify-between items-center gap-4">
      <div className="flex justify-between items-center gap-2">
        <RxStitchesLogo size={40} />
        <div>Nerfed</div>
      </div>
      {/* <div></div> */}
      <button className="">Connected</button>
    </header>
  )
}