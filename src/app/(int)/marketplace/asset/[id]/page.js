"use client";

import { useParams } from "next/navigation";

export default function AssetDetailPage() {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1>Asset Detail</h1>
      <p>This is a placeholder page for Asset ID: {id}.</p>
    </div>
  );
}

const items = [
  { id: 1, name: "CryptoPunks", price: "100 ETH ($120,000)", rarity: "Legendary", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Bored Ape Yacht Club", price: "80 ETH ($96,000)", rarity: "Legendary", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Mutant Ape Yacht Club", price: "30 ETH ($36,000)", rarity: "Epic", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Azuki", price: "50 ETH ($60,000)", rarity: "Epic", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Doodles", price: "20 ETH ($24,000)", rarity: "Rare", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Cool Cats", price: "15 ETH ($18,000)", rarity: "Rare", image: "https://via.placeholder.com/150" },
  { id: 7, name: "World of Women", price: "25 ETH ($30,000)", rarity: "Rare", image: "https://via.placeholder.com/150" },
  { id: 8, name: "CloneX", price: "40 ETH ($48,000)", rarity: "Epic", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Meebits", price: "10 ETH ($12,000)", rarity: "Common", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Pudgy Penguins", price: "8 ETH ($9,600)", rarity: "Common", image: "https://via.placeholder.com/150" }
];