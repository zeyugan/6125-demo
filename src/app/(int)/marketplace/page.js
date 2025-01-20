"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-low-to-high");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [activeTab, setActiveTab] = useState("trending");
  const [timeFilter, setTimeFilter] = useState("24h");
  const router = useRouter();

  // 构建不同条件的数据
  const dataSets = {
    trending: {
      '24h': [
        { rank: 1, name: "Courtyard.io", image: "/1.png", floorPrice: "16 POL", volume: "41 ETH" },
        { rank: 2, name: "Nation Pass", image: "/2.png", floorPrice: "0.02 ETH", volume: "31 ETH" },
        { rank: 3, name: "Trump Digital Trading Card...", image: "/3.png", floorPrice: "0.05 ETH", volume: "102 ETH" },
        { rank: 4, name: "Azuki Elementals", image: "/4.png", floorPrice: "1.20 ETH", volume: "540 ETH" },
        { rank: 5, name: "BEANZ Official", image: "/5.png", floorPrice: "0.63 ETH", volume: "187 ETH" },
        { rank: 6, name: "Gemesis", image: "/6.png", floorPrice: "0.03 ETH", volume: "6 ETH" },
        { rank: 7, name: "Azuki", image: "/7.png", floorPrice: "10.72 ETH", volume: "1,403 ETH" },
        { rank: 8, name: "Milady Maker", image: "/8.png", floorPrice: "5 ETH", volume: "557 ETH" },
        { rank: 9, name: "Raccoons: Genesis Pass", image: "/9.png", floorPrice: "0.52 ETH", volume: "52 ETH" },
        { rank: 10, name: "Lil Pudgys", image: "/10.png", floorPrice: "1.99 ETH", volume: "214 ETH" }
      ],
      '7d': [
        { rank: 1, name: "Courtyard.io", image: "https://via.placeholder.com/50", floorPrice: "16 POL", volume: "291 ETH" },
        { rank: 2, name: "Trump Digital Trading Card...", image: "https://via.placeholder.com/50", floorPrice: "0.05 ETH", volume: "501 ETH" },
        { rank: 3, name: "Chainbase Mystland", image: "https://via.placeholder.com/50", floorPrice: "< 0.01 ETH", volume: "2 ETH" },
        { rank: 4, name: "Art DeCCOs", image: "https://via.placeholder.com/50", floorPrice: "0.02 ETH", volume: "142 ETH" },
        { rank: 5, name: "Azuki Elementals", image: "https://via.placeholder.com/50", floorPrice: "1.20 ETH", volume: "3,773 ETH" },
        { rank: 6, name: "BEANZ Official", image: "https://via.placeholder.com/50", floorPrice: "0.63 ETH", volume: "1,783 ETH" },
        { rank: 7, name: "DXNK", image: "https://via.placeholder.com/50", floorPrice: "0.28 ETH", volume: "457 ETH" },
        { rank: 8, name: "Gemesis", image: "https://via.placeholder.com/50", floorPrice: "0.03 ETH", volume: "32 ETH" },
        { rank: 9, name: "MetaWinners", image: "https://via.placeholder.com/50", floorPrice: "0.05 ETH", volume: "59 ETH" },
        { rank: 10, name: "Azuki", image: "https://via.placeholder.com/50", floorPrice: "10.72 ETH", volume: "8,894 ETH" }
      ]
      
    },
    top: {
      '24h': [
        { rank: 1, name: "Azuki", image: "https://via.placeholder.com/50", floorPrice: "10.72 ETH", volume: "1,496 ETH", change: "< 0.01%" },
        { rank: 2, name: "Pudgy Penguins", image: "https://via.placeholder.com/50", floorPrice: "19.64 ETH", volume: "611 ETH", change: "< 0.01%" },
        { rank: 3, name: "Milady Maker", image: "https://via.placeholder.com/50", floorPrice: "5 ETH", volume: "557 ETH", change: "< 0.01%" },
        { rank: 4, name: "Azuki Elementals", image: "https://via.placeholder.com/50", floorPrice: "1.20 ETH", volume: "540 ETH", change: "< 0.01%" },
        { rank: 5, name: "CryptoPunks", image: "https://via.placeholder.com/50", floorPrice: "—", volume: "454 ETH", change: "< 0.01%" },
        { rank: 6, name: "Bored Ape Yacht Club", image: "https://via.placeholder.com/50", floorPrice: "14.60 ETH", volume: "294 ETH", change: "+129%" },
        { rank: 7, name: "Lil Pudgys", image: "https://via.placeholder.com/50", floorPrice: "1.99 ETH", volume: "214 ETH", change: "< 0.01%" },
        { rank: 8, name: "BEANZ Official", image: "https://via.placeholder.com/50", floorPrice: "0.63 ETH", volume: "187 ETH", change: "< 0.01%" },
        { rank: 9, name: "Doodles", image: "https://via.placeholder.com/50", floorPrice: "4.33 ETH", volume: "158 ETH", change: "< 0.01%" },
        { rank: 10, name: "Trump Digital Trading Card...", image: "https://via.placeholder.com/50", floorPrice: "0.05 ETH", volume: "102 ETH", change: "< 0.01%" }
      ],
      '7d': [
        { rank: 1, name: "Azuki", image: "https://via.placeholder.com/50", floorPrice: "10.72 ETH", volume: "8,894 ETH", change: "+108%" },
        { rank: 2, name: "Pudgy Penguins", image: "https://via.placeholder.com/50", floorPrice: "19.64 ETH", volume: "4,254 ETH", change: "< 0.01%" },
        { rank: 3, name: "Azuki Elementals", image: "https://via.placeholder.com/50", floorPrice: "1.20 ETH", volume: "3,773 ETH", change: "+59%" },
        { rank: 4, name: "CryptoPunks", image: "https://via.placeholder.com/50", floorPrice: "—", volume: "3,353 ETH", change: "+254%" },
        { rank: 5, name: "Milady Maker", image: "https://via.placeholder.com/50", floorPrice: "5 ETH", volume: "3,040 ETH", change: "+556%" },
        { rank: 6, name: "BEANZ Official", image: "https://via.placeholder.com/50", floorPrice: "0.63 ETH", volume: "1,783 ETH", change: "+56%" },
        { rank: 7, name: "Lil Pudgys", image: "https://via.placeholder.com/50", floorPrice: "1.99 ETH", volume: "1,391 ETH", change: "< 0.01%" },
        { rank: 8, name: "Doodles", image: "https://via.placeholder.com/50", floorPrice: "4.33 ETH", volume: "1,382 ETH", change: "+0.64%" },
        { rank: 9, name: "Bored Ape Yacht Club", image: "https://via.placeholder.com/50", floorPrice: "14.60 ETH", volume: "1,091 ETH", change: "+24%" },
        { rank: 10, name: "Mutant Ape Yacht Club", image: "https://via.placeholder.com/50", floorPrice: "2.29 ETH", volume: "863 ETH", change: "+50%" }
      ]
      
    }
  };

  // Dummy data for items
  const items = [
    { id: 1, name: "CryptoPunks", price: "100 ETH ($120,000)", rarity: "Legendary", image: "/market/1.png" },
    { id: 2, name: "Bored Ape Yacht Club", price: "80 ETH ($96,000)", rarity: "Legendary", image: "/market/2.png" },
    { id: 3, name: "Mutant Ape Yacht Club", price: "30 ETH ($36,000)", rarity: "Epic", image: "/market/3.png" },
    { id: 4, name: "Azuki", price: "50 ETH ($60,000)", rarity: "Epic", image: "/market/4.png" },
    { id: 5, name: "Doodles", price: "20 ETH ($24,000)", rarity: "Rare", image: "/market/5.png" },
    { id: 6, name: "Cool Cats", price: "15 ETH ($18,000)", rarity: "Rare", image: "/market/6.png" },
    { id: 7, name: "World of Women", price: "25 ETH ($30,000)", rarity: "Rare", image: "/market/7.png" },
    { id: 8, name: "CloneX", price: "40 ETH ($48,000)", rarity: "Epic", image: "/market/8.png" },
    { id: 9, name: "Meebits", price: "10 ETH ($12,000)", rarity: "Common", image: "/market/9.png" }
  ];
  

  const [collections, setCollections] = useState(dataSets.trending['24h']);

  useEffect(() => {
    setCollections(dataSets[activeTab][timeFilter]);
  }, [activeTab, timeFilter]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sorting
  const sortedItems = items
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedRarity ? item.rarity === selectedRarity : true))
    .sort((a, b) => (sortBy === "price-low-to-high" ? a.price - b.price : b.price - a.price));


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-3">
          <button
            className={`px-4 py-1 rounded-lg text-sm font-medium ${activeTab === "trending" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </button>
          <button
            className={`px-4 py-1 rounded-lg text-sm font-medium ${activeTab === "top" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("top")}
          >
            Top
          </button>
        </div>

        <div className="flex space-x-2">
          {["24h", "7d"].map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${timeFilter === filter ? "bg-black text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setTimeFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button onClick={() => router.push('/marketplace/Redeem')} className="px-4 py-1 rounded-lg bg-gray-200 text-black text-sm font-medium">Redeem Asset</button>
          <button onClick={() => router.push('/marketplace/myasset')} className="px-4 py-1 rounded-lg bg-black text-white text-sm font-medium">My Asset</button>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {collections.map((collection) => (
          <div key={collection.rank} className="bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
            <span className="font-bold text-sm">{collection.rank}</span>
            <img src={collection.image} alt={collection.name} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <h2 className="font-semibold text-sm">{collection.name}</h2>
              <div className="flex justify-between">
                <p className="text-gray-500 text-xs">Floor Price: {collection.floorPrice}</p>
                <p className="text-gray-500 text-xs font-bold" style={{ fontSize: '14px' }}>Volume: {collection.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Sidebar Filters and Items Grid */}
      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-1/4 bg-white p-3 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3">Filters</h2>
          <div className="mb-3">
            <label className="block font-semibold mb-1 text-sm">Search</label>
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border p-2 rounded-lg w-full text-sm"
            />
          </div>
          <div className="mb-3">
            <label className="block font-semibold mb-1 text-sm">Sort by</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border p-2 rounded-lg w-full text-sm">
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-sm">Rarity</label>
            <select value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)} className="border p-2 rounded-lg w-full text-sm">
              <option value="">All</option>
              <option value="Common">Common</option>
              <option value="Rare">Rare</option>
              <option value="Epic">Epic</option>
              <option value="Legendary">Legendary</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-3 ml-4">
          {sortedItems.map((item) => (
            <div key={item.id} className="bg-white p-3 rounded-lg shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-28 object-cover mb-3 rounded-lg" />
              <h2 className="text-sm font-bold">{item.name}</h2>
              <p className="text-gray-500 text-sm">${item.price}</p>
              <p className="text-xs text-gray-400">{item.rarity}</p>
              <button className="mt-3 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 text-sm">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;

