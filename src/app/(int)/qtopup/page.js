"use client"; 

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Modal from 'react-modal';

// 设置 Modal 的根元素
Modal.setAppElement('body');

const TopUpPage = () => {
  const [usdBalance, setUsdBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const router = useRouter();

  // 加载余额数据
  useEffect(() => {
    const storedBalance = localStorage.getItem('usdBalance');
    if (storedBalance) {
      setUsdBalance(Number(storedBalance));
    }
  }, []);

  // 打开弹窗
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 关闭弹窗
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPaymentMethod('');
  };

  // 处理选择支付方式
  const handlePaymentSelection = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method");
      return;
    }
    alert(`You have selected ${selectedPaymentMethod} as your payment method.`);
    closeModal();
  };

  return (
    <div className="h-screen bg-white text-black p-4 flex items-start justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        
        {/* 左侧：Wallet 信息 */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg w-[500px]">
          <h1 className="text-3xl font-bold mb-5">Wallet</h1>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">USD Balance</h2>
            <p className="text-3xl font-bold text-gray-700">${usdBalance}</p>
            <p className="text-gray-500">Pending Transaction Amount <span className="text-md">$0</span></p>
          </div>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">$OL Balance</h2>
            <p className="text-3xl font-bold text-gray-700">0</p>
            <p className="text-gray-500">Pending Transaction Amount <span className="text-md">0</span></p>
          </div>
          <div className="mb-5 border-t border-gray-300 pt-4">
            <h2 className="text-lg font-semibold">VIP Tier</h2>
            <p className="text-md">No VIP</p>
            <p className="text-md text-gray-500">Avg $OL Balance: 0 | Activity Score: 0</p>
          </div>
          <button className="w-full mt-2 bg-gray-300 text-black py-3 rounded-lg hover:bg-gray-400">
            Transaction History
          </button>
        </div>

        {/* 右侧：Navigation Options */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg w-[500px]">
          <h2 className="text-2xl font-bold mb-5 text-center">Options</h2>
          <div className="space-y-4">
            <button onClick={() => router.push('/qtopup/topup')} className="w-full text-left bg-white p-4 rounded-lg shadow hover:bg-gray-200">
              <h3 className="text-lg font-bold text-black">Quick Top-up</h3>
              <p className="text-md text-gray-500">Crypto and Card Payments</p>
            </button>

            <button onClick={() => router.push('/qtopup/withdrawal')} className="w-full text-left bg-white p-4 rounded-lg shadow hover:bg-gray-200">
              <h3 className="text-lg font-bold text-black">Withdrawals</h3>
              <p className="text-md text-gray-500">Stablecoins to Wallet</p>
            </button>

            <button onClick={() => router.push('/marketplace')} className="w-full text-left bg-white p-4 rounded-lg shadow hover:bg-gray-200">
              <h3 className="text-lg font-bold text-black">Premium Currencies</h3>
              <p className="text-md text-gray-500">Premium currency balances and marketplace</p>
            </button>

            <button onClick={openModal} className="w-full text-left bg-white p-4 rounded-lg shadow hover:bg-gray-200">
              <h3 className="text-lg font-bold text-black">Receiving Payments</h3>
              <p className="text-md text-gray-500">How you want to be paid</p>
            </button>
          </div>
        </div>
      </div>

      {/* Receiving Payments Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Choose how you want to be paid</label>
          <select 
            value={selectedPaymentMethod} 
            onChange={(e) => setSelectedPaymentMethod(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">-- Select Payment Method --</option>
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="$OL">$OL</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-400 text-black py-2 px-4 rounded-lg" onClick={closeModal}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={handlePaymentSelection}>
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TopUpPage;
