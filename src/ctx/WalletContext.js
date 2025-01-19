"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const WalletContext = createContext();

// Provider component
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  // Rehydrate wallet address from localStorage
  useEffect(() => {
    const storedWalletAddress = localStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  // Update localStorage whenever walletAddress changes
  useEffect(() => {
    if (walletAddress) {
      localStorage.setItem("walletAddress", walletAddress);
    } else {
      localStorage.removeItem("walletAddress");
    }
  }, [walletAddress]);

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook for using the WalletContext
export const useWallet = () => useContext(WalletContext);
