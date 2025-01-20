"use client";

import React from "react";
import { useWallet } from "../ctx/WalletContext";

const TopBar = React.memo(() => {
  const { walletAddress, setWalletAddress } = useWallet();

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]); // Set wallet address in context
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      alert(
        "Metamask is not installed. Please install it to use this feature."
      );
    }
  };

  const handleLogout = () => {
    setWalletAddress(null); // Clear wallet address from context
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="ms-auto d-flex align-items-center">
        {walletAddress ? (
          <>
            <span className="text-light me-3">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </span>
            <button className="btn btn-light me-3" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-light" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        <div
          className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center ms-3"
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {walletAddress ? "A" : "-"}
        </div>
      </div>
    </nav>
  );
});

export default TopBar;
