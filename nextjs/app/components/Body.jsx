import React from 'react';
import Image from 'next/image';

export const Body = () => {
  return (
    <div className='grid grid-cols-5 gap-4 mt-4 mb-4 p-4 bg-[#f9f6f6] rounded-lg shadow-md'>

      {/* First Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xf39c410dac956ba98004f411e182fb4eed595270/1606" target="_blank" rel="noopener noreferrer"><Image className='rounded-tl-lg rounded-tr-lg' src="/No1.png" alt="Art 1" width={264} height={240} /></a>
            <div className='flex flex-col justify-between item-center gap-4 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>One Gravity</div>
                <div>1.585 ETH</div>
              </div>
              <div className='font-bold'>Market: <span>Opensea</span></div>
            </div>
        </div>

      {/* Second Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/13456" target="_blank" rel="noopener noreferrer"><Image className='rounded-tl-lg rounded-tr-lg' src="/Art2.png" alt="Art 2" width={264} height={200} /></a>
            <div className='flex flex-col justify-between item-center gap-4 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>Lil Pudgy #13456</div>
                <div>1.548 ETH</div>
              </div>
              <div className='font-bold'>Market: <span>Opensea</span></div>
            </div>
        </div>

        {/* Third Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e/8400" target="_blank" rel="noopener noreferrer"><Image className='rounded-tl-lg rounded-tr-lg' src="/Art3.png" alt="Art 2" width={264} height={200} /></a>
            <div className='flex flex-col justify-between item-center gap-4 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>Elemental #8400</div>
                <div>0.259 ETH</div>
              </div>
              <div className='font-bold'>Market: <span>Opensea</span></div>
            </div>
        </div>

        {/* Fourth Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab/1168" target="_blank" rel="noopener noreferrer"><Image className='rounded-tl-lg rounded-tr-lg' src="/Art4.png" alt="Art 2" width={264} height={200} /></a>
            <div className='flex flex-col justify-between item-center gap-4 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>Remilio 1168</div>
                <div>0.5699 ETH</div>
              </div>
              <div className='font-bold'>Market: <span>Opensea</span></div>
            </div>
        </div>

        {/* Fifth Nft */}
        <div>
          <a href="https://magiceden.io/item-details/AVrGwmwkQkoaCBx3UcAhDHca9hJReEtjaG797UY5yHtp" target="_blank" rel="noopener noreferrer"><Image className='rounded-tl-lg rounded-tr-lg' src="/Art5.png" alt="Art 2" width={264} height={200} /></a>
            <div className='flex flex-col justify-between item-center gap-4 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>SMB #664</div>
                <div>22.81 SOL</div>
              </div>
              <div className='font-bold'>Market: <span>ME</span></div>
            </div>
        </div>

    </div>
  )
}
