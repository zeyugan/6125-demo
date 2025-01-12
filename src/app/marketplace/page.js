'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MarketplacePage() {
  // pie 1
  const pieData1 = {
    labels: ['Bitcoin', 'Ethereum', 'Tether', 'Cardano', 'Solana'],
    datasets: [
      {
        label: 'Market Share',
        data: [40, 30, 20, 5, 5], // Dummy data
        backgroundColor: ['#f44336', '#4caf50', '#2196f3', '#ff9800', '#9c27b0'],
        borderWidth: 1,
      },
    ],
  };

  // pie 2
  const pieData2 = {
    labels: ['Binance Coin', 'Polkadot', 'Ripple', 'Dogecoin', 'Litecoin'],
    datasets: [
      {
        label: 'Market Share',
        data: [25, 20, 30, 15, 10], // Dummy data
        backgroundColor: ['#ff5722', '#3f51b5', '#009688', '#795548', '#607d8b'],
        borderWidth: 1,
      },
    ],
  };

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
      </div>
    </div>
  );
}
