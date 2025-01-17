"use client";

import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LendingPage() {
    const [userCreditScore, setUserCreditScore] = useState(null);
    const [borrowBills, setBorrowBills] = useState([]);
    const [lendAmount, setLendAmount] = useState(0); // 借入金额
    const [selectedAsset, setSelectedAsset] = useState(""); // 选择的资产

    // 初始化数据
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/update-bill");
                const result = await response.json();
                console.log(result);
                setUserCreditScore(result.user);
                setBorrowBills(result.borrowBills);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    // 更新 JSON 文件
    const updateBillsInJSON = async (updatedBills, updatedUserCreditScore) => {
        try {
            const response = await fetch("/api/update-bill", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    updatedBills,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update bills");
            }

            const result = await response.json();
            setUserCreditScore(result.user);
            setBorrowBills(result.borrowBills);
        } catch (error) {
            console.error("Failed to update JSON:", error);
        }
    };

    // 处理单个还款操作
    const handleRepayment = async (billId) => {
        // 更新账单状态为 Paid
        const updatedBills = borrowBills.map((bill) =>
            bill.id === billId ? { ...bill, status: "Paid" } : bill
        );

        try {
            const response = await fetch("/api/update-bill", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updatedBills }),
            });

            if (response.ok) {
                const result = await response.json();
                setUserCreditScore(result.user); // 更新信用分
                setBorrowBills(result.borrowBills); // 更新账单
            } else {
                console.error("Failed to update data");
            }
        } catch (error) {
            console.error("Error during repayment:", error);
        }
    };

    // 处理借款操作
    const handleBorrow = async () => {
        if (!selectedAsset || lendAmount <= 0) {
            alert("Please select an asset and enter a valid amount.");
            return;
        }

        if (lendAmount > userCreditScore.maxBorrowLimit) {
            alert("Insufficient borrow limit.");
            return;
        }

        // 创建新的借款条目
        const newBill = {
            id: borrowBills.length + 1, // 确保 ID 唯一
            asset: selectedAsset,
            amount: lendAmount,
            status: "Unpaid",
        };

        const updatedBills = [...borrowBills, newBill];

        const updatedUserCreditScore = {
            ...userCreditScore,
            maxBorrowLimit: userCreditScore.maxBorrowLimit - lendAmount, // 更新 Borrow Limit
        };

        try {
            const response = await fetch("/api/update-bill", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updatedBills }),
            });

            if (response.ok) {
                const result = await response.json();

                // 更新前端状态
                setUserCreditScore(result.user);
                setBorrowBills(result.borrowBills);

                // 重置表单
                setSelectedAsset("");
                setLendAmount(0);
            } else {
                console.error("Failed to update data");
            }
        } catch (error) {
            console.error("Error during borrowing:", error);
        }
    };

    if (!userCreditScore || borrowBills.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h1>Web3 Lending and Borrowing Platform</h1>

            {/* 用户信用信息 */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Your Credit Score</div>
                        <div className="card-body">
                            <h5>
                                Credit Score: <strong>{userCreditScore.creditScore}</strong>
                            </h5>
                            <p>
                                Maximum Borrow Limit:{" "}
                                <strong>${userCreditScore.maxBorrowLimit}</strong>
                            </p>
                            <p>
                                Maximum Lend Limit:{" "}
                                <strong>${userCreditScore.maxLendLimit}</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* 信用分数图表 */}
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Credit Score Breakdown</div>
                        <div className="card-body">
                            <Doughnut
                                data={{
                                    labels: ["Trading Activity", "Staking Activity", "External Model"],
                                    datasets: [
                                        {
                                            label: "Credit Breakdown",
                                            data: userCreditScore?.breakdown
                                                ? Object.values(userCreditScore.breakdown)
                                                : [0, 0, 0], // 默认值，防止报错
                                            backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 借入账单 */}
            <div className="mt-5">
                <h2>Your Borrow Bills</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {borrowBills.map((bill) => (
                        <tr key={bill.id}>
                            <td>{bill.asset || "Unknown Asset"}</td>
                            <td>${bill.amount}</td>
                            <td>{bill.status}</td>
                            <td>
                                {bill.status === "Unpaid" && (
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleRepayment(bill.id)}
                                    >
                                        Repay
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* 借款表单 */}
            <div className="mt-5">
                <h2>Borrow Assets</h2>
                <div className="form-group">
                    <label htmlFor="asset">Select Asset:</label>
                    <select
                        id="asset"
                        className="form-control"
                        value={selectedAsset}
                        onChange={(e) => setSelectedAsset(e.target.value)}
                    >
                        <option value="">-- Select an Asset --</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="SOL">Solana (SOL)</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="amount">Enter Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        className="form-control"
                        value={lendAmount}
                        onChange={(e) => setLendAmount(Number(e.target.value))}
                    />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleBorrow}>
                    Borrow Now
                </button>
            </div>
        </div>
    );
}