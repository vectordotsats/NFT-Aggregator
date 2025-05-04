import React from 'react';
import Image from 'next/image';

export const Body = () => {
  return (
    <div className='grid grid-cols-5 gap-4 mt-4 mb-4 p-4 bg-white rounded-lg shadow-md'>

      {/* First Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xf39c410dac956ba98004f411e182fb4eed595270/1606" target="_blank" rel="noopener noreferrer"><Image src="/No1.png" alt="Art 1" width={264} height={240} /></a>
            <div className='flex flex-col justify-between item-center gap-5 text-sm p-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>One Gravity</div>
                <div>1.585ETH</div>
              </div>
              <div className='font-bold'>Market: <span>Opensea</span></div>
            </div>
        </div>
      {/* First Nft */}
        <div>
          <a href="https://opensea.io/item/ethereum/0xf39c410dac956ba98004f411e182fb4eed595270/1606" target="_blank" rel="noopener noreferrer"><Image className='object-cover' src="/No2.png" alt="Art 2" width={264} height={200} /></a>
            <div className='flex flex-col justify-between item-center gap-1 text-md px-2'>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>Lil Pudgy #13456</div>
                <div>1.548ETH</div>
              </div>
              <div className='font-bold'>Market: <span>Opensea</span></div>
            </div>
        </div>

    </div>
  )
}

// https://opensea.io/item/ethereum/0x8c6def540b83471664edc6d5cf75883986932674/3397
// 0.314 ETH

// https://opensea.io/item/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/13456