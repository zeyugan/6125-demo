"use client";

import { useState } from "react";

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-low-to-high");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [activeTab, setActiveTab] = useState("trending");
  const [timeFilter, setTimeFilter] = useState("24h");

  // Dummy data for rankings
  const collections = [
    { rank: 1, name: "Trump Digital Trading Card", image: "https://via.placeholder.com/50", floorPrice: "548 POL", volume: "219 ETH" },
    { rank: 2, name: "Courtyard.io", image: "https://via.placeholder.com/50", floorPrice: "15.99 POL", volume: "34 ETH" },
    { rank: 3, name: "Azuki Elementals", image: "https://via.placeholder.com/50", floorPrice: "1.16 ETH", volume: "661 ETH" },
    { rank: 4, name: "BEANZ Official", image: "https://via.placeholder.com/50", floorPrice: "0.62 ETH", volume: "295 ETH" },
    { rank: 5, name: "Milady Maker", image: "https://via.placeholder.com/50", floorPrice: "4.85 ETH", volume: "2,267 ETH" },
    { rank: 6, name: "Redacted Remilio Babies", image: "https://via.placeholder.com/50", floorPrice: "0.98 ETH", volume: "423 ETH" },
    { rank: 7, name: "Raccoons: Genesis Pass", image: "https://via.placeholder.com/50", floorPrice: "0.48 ETH", volume: "188 ETH" },
    { rank: 8, name: "Azuki", image: "https://via.placeholder.com/50", floorPrice: "10.50 ETH", volume: "1,846 ETH" },
  ];

  // Dummy data for items
  const items = [
    { id: 1, name: "Epic Sword", price: 50, rarity: "Rare", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Magic Shield", price: 80, rarity: "Epic", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Health Potion", price: 10, rarity: "Common", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mystic Wand", price: 120, rarity: "Legendary", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Enchanted Boots", price: 60, rarity: "Common", image: "https://via.placeholder.com/150" },
  ];

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
          {["1h", "6h", "24h", "7d"].map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${timeFilter === filter ? "bg-black text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setTimeFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button className="px-4 py-1 rounded-lg bg-gray-200 text-black text-sm font-medium">All Chains</button>
          <button className="px-4 py-1 rounded-lg bg-gray-200 text-black text-sm font-medium">View All</button>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {collections.map((collection) => (
          <div key={collection.rank} className="bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
            <span className="font-bold text-sm">{collection.rank}</span>
            <img src={collection.image} alt={collection.name} className="w-10 h-10 rounded-full" />
            <div>
              <h2 className="font-semibold text-sm">{collection.name}</h2>
              <p className="text-gray-500 text-xs">{collection.floorPrice}</p>
            </div>
            <p className="ml-auto font-bold text-sm">{collection.volume}</p>
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
