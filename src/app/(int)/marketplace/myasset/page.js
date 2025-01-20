"use client"; 
import React, { useState } from 'react';

// Deposit Modal Component
const DepositModal = ({ open, onClose, asset }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="font-bold text-lg">Confirm Deposit</h2>
                <p>{`Are you sure you want to deposit your ${asset.name}?`}</p>
                <p>Wallet Address: <strong>0xABC123...XYZ789</strong></p>
                <p>This will enhance your borrowing limit and credit score.</p>
                <div className="mt-4 flex justify-end">
                    <button onClick={() => onClose(true, asset)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Confirm
                    </button>
                    <button onClick={() => onClose(false)} className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

// Redeem Confirmation Modal
const RedeemConfirmModal = ({ open, onClose, asset }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="font-bold text-lg">Confirm Redeem</h2>
                <p>{`You are about to redeem your ${asset.name}.`}</p>
                <p>Upon redeeming, your staked benefits and borrowing limits will be removed.</p>
                <div className="mt-4 flex justify-end">
                    <button onClick={() => onClose(true, asset)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Confirm
                    </button>
                    <button onClick={() => onClose(false)} className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

// Redeem Modal Component
const RedeemModal = ({ open, onClose, depositedItems, handleRedeem }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);

    if (!open) return null;

    const handleRedeemClick = (asset) => {
        setSelectedAsset(asset);
        setConfirmOpen(true);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="font-bold text-lg mb-3">Redeem Assets</h2>
                    {depositedItems.length === 0 ? (
                        <p>No assets available for redeem.</p>
                    ) : (
                        depositedItems.map(asset => (
                            <div key={asset.id} className="border-b pb-2 mb-2">
                                <h3 className="font-semibold">{asset.name}</h3>
                                <p>{asset.price}</p>
                                <button onClick={() => handleRedeemClick(asset)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
                                    Redeem
                                </button>
                            </div>
                        ))
                    )}
                    <button onClick={onClose} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </div>
            {confirmOpen && <RedeemConfirmModal open={confirmOpen} onClose={(confirm, asset) => {
                if (confirm) {
                    handleRedeem(asset);
                }
                setConfirmOpen(false);
            }} asset={selectedAsset} />}
        </>
    );
};

// Main MyAssetPage Component
const MyAssetPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('price-low-to-high');
    const [selectedRarity, setSelectedRarity] = useState('');
    const [depositModalOpen, setDepositModalOpen] = useState(false);
    const [redeemModalOpen, setRedeemModalOpen] = useState(false);
    const [currentAsset, setCurrentAsset] = useState(null);
    const [items, setItems] = useState([
        { id: 1, name: "CryptoPunks", price: "100 ETH ($120,000)", rarity: "Legendary", image: "/market/1.png" },
        { id: 2, name: "Bored Ape Yacht Club", price: "80 ETH ($96,000)", rarity: "Legendary", image: "/market/2.png" },
        { id: 3, name: "Mutant Ape Yacht Club", price: "30 ETH ($36,000)", rarity: "Epic", image: "/market/3.png" },
        { id: 4, name: "Azuki", price: "50 ETH ($60,000)", rarity: "Epic", image: "/market/4.png" },
        { id: 5, name: "Doodles", price: "20 ETH ($24,000)", rarity: "Rare", image: "/market/5.png" },
        { id: 6, name: "Cool Cats", price: "15 ETH ($18,000)", rarity: "Rare", image: "/market/6.png" }
    ]);
    const [depositedItems, setDepositedItems] = useState([]);

    const handleDeposit = (asset) => {
        setCurrentAsset(asset);
        setDepositModalOpen(true);
    };

    const handleDepositConfirm = (confirm, asset) => {
        if (confirm) {
            setDepositedItems(prev => [...prev, asset]);
            setItems(prev => prev.filter(item => item.id !== asset.id));
        }
        setDepositModalOpen(false);
    };

    const handleRedeem = (asset) => {
        setItems(prev => [...prev, asset]);
        setDepositedItems(prev => prev.filter(item => item.id !== asset.id));
    };

    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedRarity ? item.rarity === selectedRarity : true);
    }).sort((a, b) => {
        return sortBy === 'price-low-to-high' ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price);
    });
    return (
        <div className="min-h-screen bg-gray-100 p-4 flex">
            {/* Left Panel (Filters + Redeem Button) */}
            <div className="w-1/4 bg-white p-3 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-3">Filters</h2>
                <div className="mb-3">
                    <label className="block font-semibold mb-1 text-sm">Search</label>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="border p-2 rounded-lg w-full text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block font-semibold mb-1 text-sm">Sort by</label>
                    <select
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value)}
                        className="border p-2 rounded-lg w-full text-sm"
                    >
                        <option value="price-low-to-high">Price: Low to High</option>
                        <option value="price-high-to-low">Price: High to Low</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="block font-semibold mb-1 text-sm">Rarity</label>
                    <select
                        value={selectedRarity}
                        onChange={e => setSelectedRarity(e.target.value)}
                        className="border p-2 rounded-lg w-full text-sm"
                    >
                        <option value="">All</option>
                        <option value="Common">Common</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                </div>
                <button onClick={() => setRedeemModalOpen(true)} className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 w-full">
                    Redeem
                </button>
            </div>

            {/* Right Panel (Assets) */}
            <div className="w-3/4 ml-4 grid grid-cols-3 gap-4">
                {filteredItems.map(item => (
                    <div key={item.id} className="bg-white p-3 rounded-lg shadow-lg">
                        <img src={item.image} alt={item.name} className="w-full h-28 object-cover mb-3 rounded-lg" />
                        <h2 className="text-sm font-bold">{item.name}</h2>
                        <p className="text-gray-500 text-sm">{item.price}</p>
                        <button onClick={() => handleDeposit(item)} className="mt-2 bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 text-sm">
                            Deposit
                        </button>
                    </div>
                ))}
            </div>

            {depositModalOpen && <DepositModal open={depositModalOpen} onClose={handleDepositConfirm} asset={currentAsset} />}
            {redeemModalOpen && <RedeemModal open={redeemModalOpen} onClose={() => setRedeemModalOpen(false)} depositedItems={depositedItems} handleRedeem={handleRedeem} />}
        </div>
    );
};


export default MyAssetPage;
