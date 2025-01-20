"use client";

import React, { useState } from "react";
import { useWallet } from "../ctx/WalletContext";

const TopBar = React.memo(() => {
  const { walletAddress, setWalletAddress } = useWallet();
  const [errorMessage, setErrorMessage] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]); // Set wallet address in context
      } catch (error) {
        setErrorMessage("Error connecting to Metamask: " + error.message);
        setTimeout(() => setErrorMessage(null), 5000); // Clear error after 5 seconds
      }
    } else {
      setErrorMessage(
        "Metamask is not installed. Please install it to use this feature."
      );
      setTimeout(() => setErrorMessage(null), 5000); // Clear error after 5 seconds
    }
  };

  const handleLogout = () => {
    setWalletAddress(null); // Clear wallet address from context
  };

  return (
    <>
      {/* Floating Error Notification */}
      {errorMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: "#f8d7da",
            color: "#842029",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            fontSize: "14px",
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* TopBar Navigation */}
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
    </>
  );
});

export default TopBar;
