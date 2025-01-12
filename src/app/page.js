export default function DashboardPage() {
  const walletDetails = [
    { crypto: 'BTC', balance: '1.234', value: '0.000076' },
    { crypto: 'ETH', balance: '10.456', value: '0.000238' },
    { crypto: 'USDT', balance: '5000', value: '5000.000000' },
  ];

  const activeTrades = [
    { crypto: 'BTC', asset: 'Bitcoin Token', type: 'Cryptocurrency', amount: '0.5', price: '0.000076', activity: 'Buy' },
    { crypto: 'ETH', asset: 'Ether NFT #123', type: 'NFT', amount: '1', price: '0.000238', activity: 'Sell' },
    { crypto: 'SOL', asset: 'Solana Asset', type: 'Others', amount: '50', price: '0.001234', activity: 'Buy' },
    { crypto: 'USDT', asset: 'Tether USD', type: 'Stablecoin', amount: '2000', price: '5000.000000', activity: 'Sell' },
    { crypto: 'ADA', asset: 'Cardano NFT', type: 'NFT', amount: '300', price: '0.002300', activity: 'Buy' },
  ];

  const recentTransactions = [
    { date: '2025-01-10', crypto: 'BTC', asset: 'Bitcoin Token', type: 'Cryptocurrency', amount: '0.5', dealer: '0x123...abcd', price: '0.000076', activity: 'Buy' },
    { date: '2025-01-11', crypto: 'ETH', asset: 'Ether NFT #123', type: 'NFT', amount: '1.2', dealer: '0x456...efgh', price: '0.000238', activity: 'Sell' },
    { date: '2025-01-12', crypto: 'USDT', asset: 'Tether USD', type: 'Stablecoin', amount: '500', dealer: '0x789...ijkl', price: '5000.000000', activity: 'Buy' },
    { date: '2025-01-12', crypto: 'SOL', asset: 'Solana Asset', type: 'Others', amount: '15', dealer: '0xabc...mnop', price: '0.001234', activity: 'Sell' },
  ];

  const getCryptoBadge = (crypto) => {
    const colors = {
      BTC: '#f44336', // Red
      ETH: '#4caf50', // Green
      USDT: '#2196f3', // Blue
      SOL: '#9c27b0', // Purple
      ADA: '#ff9800', // Orange
    };

    const bgColor = colors[crypto] || '#607d8b'; // Default to grey if crypto not listed

    return (
      <span
        style={{
          display: 'inline-block',
          backgroundColor: bgColor,
          color: 'white',
          padding: '2px 8px',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '12px',
          marginRight: '5px',
        }}
      >
        {crypto}
      </span>
    );
  };

  const getActivityBadge = (activity) => {
    const bgColor = activity === 'Buy' ? '#ffe6e6' : '#e6ffe6'; // Light red for Buy, light green for Sell
    const textColor = activity === 'Buy' ? '#d9534f' : '#5cb85c'; // Red text for Buy, green text for Sell

    return (
      <span
        style={{
          display: 'inline-block',
          backgroundColor: bgColor,
          color: textColor,
          padding: '2px 8px',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '12px',
        }}
      >
        {activity}
      </span>
    );
  };

  return (
    <div className="container-fluid mt-4">
      <h1>Dashboard</h1>
      <p>Welcome to your decentralized asset trading dashboard.</p>

      {/* Wallet Details and Active Trades */}
      <div className="row mt-4">
        {/* Left Section: Wallet Details */}
        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: '#f8f9fa', color: '#000' }}
            >
              <h5>Your Wallet Details</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cryptocurrency</th>
                    <th>Balance</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {walletDetails.map((wallet, index) => (
                    <tr key={index}>
                      <td>{wallet.crypto}</td>
                      <td>{wallet.balance}</td>
                      <td>
                        {getCryptoBadge(wallet.crypto)}
                        {wallet.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Section: Active Trades */}
        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: '#f8f9fa', color: '#000' }}
            >
              <h5>Active Trades</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cryptocurrency</th>
                    <th>Asset</th>
                    <th>Type</th>
                    <th>Activity</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTrades.map((trade, index) => (
                    <tr key={index}>
                      <td>{trade.crypto}</td>
                      <td>{trade.asset}</td>
                      <td>{trade.type}</td>
                      <td>{getActivityBadge(trade.activity)}</td>
                      <td>{trade.amount}</td>
                      <td>
                        {getCryptoBadge(trade.crypto)}
                        {trade.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-4">
        <h4>Recent Transactions</h4>
        <table className="table table-striped w-100">
          <thead>
            <tr>
              <th>Date</th>
              <th>Cryptocurrency</th>
              <th>Asset</th>
              <th>Type</th>
              <th>Activity</th>
              <th>Amount</th>
              <th>Dealer Wallet</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date}</td>
                <td>{tx.crypto}</td>
                <td>{tx.asset}</td>
                <td>{tx.type}</td>
                <td>{getActivityBadge(tx.activity)}</td>
                <td>{tx.amount}</td>
                <td>{tx.dealer}</td>
                <td>
                  {getCryptoBadge(tx.crypto)}
                  {tx.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
