'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

export default function TopBar() {
  const [walletAddress, setWalletAddress] = useState(null);

  // Function to connect to Metamask
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    } else {
      alert('Metamask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="ms-auto d-flex align-items-center">
        {/* Display Wallet Address if Connected */}
        {walletAddress ? (
          <span className="text-light me-3">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
        ) : (
          <button className="btn btn-light" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {/* Replace Avatar with Letter "A" */}
        <div
          className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center ms-3"
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          A
        </div>
      </div>
    </nav>
  );
}
