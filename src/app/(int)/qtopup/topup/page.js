"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal from "react-modal";

// 设置 Modal 的根元素
Modal.setAppElement('body');

const TopUpPage = () => {
  const router = useRouter();
  const [usdBalance, setUsdBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [message, setMessage] = useState('');

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
    setTopUpAmount('');
    setMessage('');
  };

  // 处理充值
  const handleTopUp = () => {
    if (!topUpAmount || isNaN(topUpAmount) || Number(topUpAmount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setMessage("Processing your request...");

    setTimeout(() => {
      const newBalance = usdBalance + Number(topUpAmount);

      // 更新状态
      setUsdBalance(newBalance);

      // 存储到 localStorage
      localStorage.setItem('usdBalance', newBalance);

      // 关闭弹窗
      closeModal();

      // 强制刷新页面
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="h-screen bg-white text-black p-6 flex items-start justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* 左侧：Wallet 信息 */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg w-[450px]">
          <h1 className="text-3xl font-bold mb-4">Wallet</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">USD Balance</h2>
            <p className="text-3xl font-bold text-gray-700">${usdBalance}</p>
            <p className="text-gray-500">Pending Transaction Amount <span className="text-md">$0</span></p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">$OL Balance</h2>
            <p className="text-3xl font-bold text-gray-700">0</p>
            <p className="text-gray-500">Pending Transaction Amount <span className="text-md">0</span></p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-lg font-semibold">VIP Tier</h2>
            <p className="text-md">No VIP</p>
            <p className="text-md text-gray-500">Avg $OL Balance: 0 | Activity Score: 0</p>
          </div>
          <button className="w-full mt-4 bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400">
            Transaction History
          </button>
        </div>

        {/* 右侧：Quick Top-up */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg w-[400px]">
          <h2 className="text-2xl font-bold mb-4">Quick Top-up</h2>
          <div className="bg-yellow-600 p-3 rounded-lg mb-4">
            <p className="text-white text-sm">
              ⚠ For any withdrawal operation an 
              <span className="underline cursor-pointer"> Identity Verification</span> must be completed.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg flex justify-between items-center shadow text-sm cursor-pointer" onClick={openModal}>
              <div>
                <h3 className="text-lg font-bold">Crypto Top-up</h3>
                <p className="text-gray-400">1 to 5 minutes</p>
              </div>
              <span className="text-gray-400 text-lg">&gt;</span>
            </div>
            <div className="bg-white p-3 rounded-lg flex justify-between items-center shadow text-sm cursor-pointer">
              <div>
                <h3 className="text-lg font-bold">Debit-Credit Cards</h3>
                <p className="text-gray-400">by Coinbase (+155 Countries)</p>
              </div>
              <span className="text-gray-400 text-lg">&gt;</span>
            </div>
            <div className="bg-white p-3 rounded-lg flex justify-between items-center shadow text-sm cursor-pointer">
              <div>
                <h3 className="text-lg font-bold">Debit-Credit Cards</h3>
                <p className="text-gray-400">by Moonpay (+155 Countries)</p>
              </div>
              <span className="text-gray-400 text-lg">&gt;</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400" onClick={() => router.push('/qtopup')}>
            Back
          </button>
        </div>
      </div>

      {/* Modal for Top-up */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Crypto Top-up</h2>
        {message && (
          <p className="text-md text-blue-500 mb-4">{message}</p>
        )}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Amount</label>
          <input 
            type="number" 
            value={topUpAmount} 
            onChange={(e) => setTopUpAmount(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-400 text-black py-2 px-4 rounded-lg" onClick={closeModal}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={handleTopUp}>
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TopUpPage;
