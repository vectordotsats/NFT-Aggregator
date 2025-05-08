import { useAccount, useDisconnect } from 'wagmi';
import { Web3Button } from '@web3modal/react';

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {!isConnected ? (
        <Web3Button />
      ) : (
        <div>
          <p>Connected as: {address}</p>
          <button
            onClick={() => disconnect()}
            className="text-lg capitalize font-semibold py-1 px-2 border rounded-lg cursor-pointer"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;