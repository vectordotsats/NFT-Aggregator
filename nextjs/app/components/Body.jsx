import React from 'react';
import Image from 'next/image';

export const Body = () => {
  return (
    <div className='grid grid-cols-5 gap-1 mt-4 mb-4 p-4 bg-white rounded-lg shadow-md'>

      {/* First Nft */}
        <div>
            <Image src="/No1.png" alt="Art 1" width={240} height={180} />
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
            <Image src="/No2.png" alt="Art 1" width={240} height={180} />
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
            <Image src="/No3.png" alt="Art 1" width={240} height={180} />
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
            <Image src="/No4.png" alt="Art 1" width={240} height={180} />
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
            <Image src="/No5.png" alt="Art 1" width={240} height={180} />
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