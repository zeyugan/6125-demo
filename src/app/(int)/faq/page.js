export default function FAQPage() {
  const faqs = [
    {
      question: "How do I connect to my crypto wallet?",
      answer:
        "You may connect to your wallet via MetaMask. Simply install the MetaMask extension on your browser and follow the instructions to create a new wallet or import an existing one. Then, connect via the 'Connect Wallet' button on the top right corner of the page.",
    },
    {
      question: "Can I trade with fiat currency?",
      answer:
        "We recommend exchanging your fiat currency to cryptocurrency on a reputable exchange platform like Coinbase or Binance. We also provide a Quick Top-up feature to facilitate the exchange.",
    },
    {
      question: "What browsers are supported?",
      answer:
        "The application works best on modern browsers like Chrome, Edge, and Firefox that support MetaMask plugin in order to facilitate wallet connection.",
    },
    {
      question: "What is Credit Score and how is it calculated?",
      answer: (
        <div>
          Your credit determines how much you can borrow and your maximum number
          of borrowing and marketplace openings. The score is aggregated from
          the following:
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th>Action</th>
                <th>Credit Score Imapact</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Model Analysis on your linked wallet</td>
                <td> High (<i>*depends on analysis outcome</i>)</td>
              </tr>
              <tr>
                <td>Timely Repayments</td>
                <td style={{ color: "green" }}>High</td>
              </tr>
              <tr>
                <td>Missed/Delayed Repayments</td>
                <td style={{ color: "red" }}>High</td>
              </tr>
              <tr>
                <td>Borrowing Limit Usage</td>
                <td style={{ color: "green" }}>Medium</td>
              </tr>
              <tr>
                <td>Account Activity</td>
                <td style={{ color: "green" }}>Medium</td>
              </tr>
              <tr>
                <td>Asset Deposit</td>
                <td style={{ color: "green" }}>Medium</td>
              </tr>
              <tr>
                <td>Account Creation Length</td>
                <td style={{ color: "green" }}>Low</td>
              </tr>
            </tbody>
          </table>
          A detailed analysis of your credit score can be found in the Lend/Borrow section.
        </div>
      ),
    },
  ];

  return (
    <div className="container mt-4">
      <h1>Frequently Asked Questions</h1>
      <div className="mt-3">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-primary">{faq.question}</h5>
            <div>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
