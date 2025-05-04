import React from 'react';
import Image from 'next/image';

export const Body = () => {
  return (
    <div className='grid grid-cols-5 gap-1 mt-4 mb-4 p-4 bg-white rounded-lg shadow-md'>

      {/* First Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xf39c410dac956ba98004f411e182fb4eed595270/1606" target="_blank" rel="noopener noreferrer"><Image src="/No1.png" alt="Art 1" width={240} height={180} /></a>
            <div className='flex flex-col justify-between item-center gap-5 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>One Gravity</div>
                <div>1.585ETH</div>
              </div>
              <div className='font-bold'>Opensea</div>
            </div>
        </div>
      {/* First Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xf39c410dac956ba98004f411e182fb4eed595270/1606" target="_blank" rel="noopener noreferrer"><Image src="/No2.png" alt="Art 2" width={240} height={180} /></a>
            <div className='flex flex-col justify-between item-center gap-1 text-sm px-8'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>Lil Pudgy #13456</div>
                <div>1.548ETH</div>
              </div>
              <div className='font-bold'>Opensea</div>
            </div>
        </div>

    </div>
  )
}