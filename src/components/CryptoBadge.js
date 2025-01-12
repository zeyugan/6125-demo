"use client";

import React from "react";

export default function CryptoBadge({ crypto }) {
  const cryptoDetails = {
    BTC: { color: "#f44336", fullName: "Bitcoin" }, // Red
    ETH: { color: "#4caf50", fullName: "Ethereum" }, // Green
    USDT: { color: "#2196f3", fullName: "Tether" }, // Blue
    SOL: { color: "#9c27b0", fullName: "Solana" }, // Purple
    ADA: { color: "#ff9800", fullName: "Cardano" }, // Orange
  };

  const getCryptoDetails = (cryptoSymbol) => {
    return (
      cryptoDetails[cryptoSymbol] || {
        color: "#607d8b",
        fullName: "Unknown Cryptocurrency",
      }
    ); // Default to grey
  };

  const { color, fullName } = getCryptoDetails(crypto);

  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: color,
        color: "white",
        padding: "2px 8px",
        borderRadius: "4px",
        fontWeight: "bold",
        fontSize: "12px",
        marginRight: "5px",
      }}
      title={fullName}
    >
      {crypto}
    </span>
  );
}
