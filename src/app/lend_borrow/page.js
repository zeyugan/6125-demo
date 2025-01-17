"use client";

import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LendingPage() {
    // User Credit Score
    const [userCreditScore, setUserCreditScore] = useState({
        creditScore: 750,
        breakdown: {
            trading: 300,
            staking: 200,
            externalModel: 250,
        },
        maxBorrowLimit: 5000,
        maxLendLimit: 2000,
    });

    // Credit Breakdown Chart
    const creditBreakdownData = {
        labels: ["Trading Activity", "Staking Activity", "External Model"],
        datasets: [
            {
                label: "Credit Breakdown",
                data: Object.values(userCreditScore.breakdown),
                backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
                borderWidth: 1,
            },
        ],
    };

    // Borrow/Lend Pool Mock Data
    const lendingPool = [
        { id: 1, asset: "USDT", type: "Lend", rate: "5%", volume: "$1000" },
        { id: 2, asset: "ETH", type: "Borrow", rate: "8%", volume: "$2000" },
        { id: 3, asset: "BTC", type: "Lend", rate: "4%", volume: "$1500" },
        { id: 4, asset: "DAI", type: "Borrow", rate: "7%", volume: "$1200" },
    ];

    return (
        <div className="container mt-4">
            <h1>Web3 Lending and Borrowing Platform</h1>

            {/* User Credit Information */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Your Credit Score</div>
                        <div className="card-body">
                            <h5>Credit Score: <strong>{userCreditScore.creditScore}</strong></h5>
                            <p>Maximum Borrow Limit: <strong>${userCreditScore.maxBorrowLimit}</strong></p>
                            <p>Maximum Lend Limit: <strong>${userCreditScore.maxLendLimit}</strong></p>
                            <p>
                                <a href="/faq" className="btn btn-link">
                                    How can I improve my credit score?
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Credit Breakdown Chart */}
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Credit Score Breakdown</div>
                        <div className="card-body">
                            <Doughnut data={creditBreakdownData} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lending Pool Section */}
            <div className="mt-5">
                <h2>Lending Pool</h2>
                <div className="row">
                    {lendingPool.map((pool) => (
                        <div className="col-md-4 mb-4" key={pool.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{pool.asset} ({pool.type})</h5>
                                    <p>Rate: {pool.rate}</p>
                                    <p>Volume: {pool.volume}</p>
                                    <button className="btn btn-primary">
                                        {pool.type === "Lend" ? "Lend Now" : "Borrow Now"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* System Calculation Info */}
            <div className="mt-5">
                <h2>System Credit Score Calculation</h2>
                <p>
                    Your credit score is calculated based on:
                </p>
                <ul>
                    <li><strong>Trading Activity:</strong> {userCreditScore.breakdown.trading} points</li>
                    <li><strong>Staking Activity:</strong> {userCreditScore.breakdown.staking} points</li>
                    <li><strong>External Model Evaluation:</strong> {userCreditScore.breakdown.externalModel} points</li>
                </ul>
                <p>
                    <a href="/learn-more" className="btn btn-secondary">Learn More About Credit Scoring</a>
                </p>
            </div>
        </div>
    );
}