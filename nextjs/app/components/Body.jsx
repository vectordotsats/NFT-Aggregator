import React from 'react';
import Image from 'next/image';

export const Body = () => {
  return (
    <div className='mt-4 mb-4 p-4 bg-white rounded-lg shadow-md'>

      {/* First Nft */}
        <div>
            <Image src="/nextjs/public/No1.svg" alt="" width={100} height={80}></Image>
            <div>
              <div>
                <div>Name of Art</div>
                <div>Price: 0.1ETH</div>
              </div>
              <div>Marketplace</div>
            </div>
        </div>

        {/* Second Nft */}
        <div>
            <Image src="/nextjs/public/No1.svg" alt="" width={100} height={80}></Image>
            <div>
              <div>
                <div>Name of Art</div>
                <div>Price: 0.1ETH</div>
              </div>
              <div>Marketplace</div>
            </div>
        </div>

        {/* Third Nft */}
        <div>
            <Image src="/nextjs/public/No1.svg" alt="" width={100} height={80}></Image>
            <div>
              <div>
                <div>Name of Art</div>
                <div>Price: 0.1ETH</div>
              </div>
              <div>Marketplace</div>
            </div>
        </div>

        {/* Fourth Nft */}
        <div>
            <Image src="/nextjs/public/No1.svg" alt="" width={100} height={80}></Image>
            <div>
              <div>
                <div>Name of Art</div>
                <div>Price: 0.1ETH</div>
              </div>
              <div>Marketplace</div>
            </div>
        </div>

        {/* Fifth Nft */}
        <div>
            <Image src="/nextjs/public/No1.svg" alt="" width={100} height={80}></Image>
            <div>
              <div>
                <div>Name of Art</div>
                <div>Price: 0.1ETH</div>
              </div>
              <div>Marketplace</div>
            </div>
        </div>
        
    </div>
  )
}