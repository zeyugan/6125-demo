"use client";

import Link from "next/link";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MarketplacePage() {
  // pie 1
  const pieData1 = {
    labels: ["Bitcoin", "Ethereum", "Tether", "Cardano", "Solana"],
    datasets: [
      {
        label: "Market Share",
        data: [40, 30, 20, 5, 5], // Dummy data
        backgroundColor: [
          "#f44336",
          "#4caf50",
          "#2196f3",
          "#ff9800",
          "#9c27b0",
        ],
        borderWidth: 1,
      },
    ],
  };

  // pie 2
  const pieData2 = {
    labels: ["Binance Coin", "Polkadot", "Ripple", "Dogecoin", "Litecoin"],
    datasets: [
      {
        label: "Market Share",
        data: [25, 20, 30, 15, 10], // Dummy data
        backgroundColor: [
          "#ff5722",
          "#3f51b5",
          "#009688",
          "#795548",
          "#607d8b",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Dummy Order Listings
  const orderListings = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    asset: `Asset ${i + 1}`,
    type: i % 2 === 0 ? "Buy" : "Sell",
    price: `$${(Math.random() * 1000).toFixed(2)}`,
    volume: `${(Math.random() * 50).toFixed(2)} units`,
    description: `Description for Asset ${i + 1}`,
  }));

  return (
    <div className="container mt-4">
      <h1>Marketplace</h1>

      <div className="row mt-4">
        {/* pie 1 */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Market Share (Chart 1)</div>
            <div className="card-body">
              <Doughnut data={pieData1} />
            </div>
          </div>
        </div>

        {/* pie 2 */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Market Share (Chart 2)</div>
            <div className="card-body">
              <Doughnut data={pieData2} />
            </div>
          </div>
        </div>

        {/* Asset Buy/Sell Order Listings */}
        <div className="mt-5">
          <h2>Asset Buy/Sell Order Listings</h2>
          <div className="row">
            {orderListings.map((order) => (
              <div className="col-md-2 mb-4" key={order.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link href={`/marketplace/asset/${order.id}`}>
                        {order.asset}
                      </Link>
                    </h5>
                    <p className="card-text">Type: {order.type}</p>
                    <p className="card-text">Price: {order.price}</p>
                    <p className="card-text">Volume: {order.volume}</p>
                    <p className="card-text text-muted">{order.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
