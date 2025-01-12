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
        'We recommend exchanging your fiat currency to cryptocurrency on a reputable exchange platform like Coinbase or Binance. We also provide a Quick Top-up feature to facilitate the exchange.',
    },
    {
      question: "Who can access this application?",
      answer:
        "Only authorized personnel with valid credentials can access this application.",
    },
    {
      question: "What browsers are supported?",
      answer:
        "The application works best on modern browsers like Chrome, Edge, and Firefox that support MetaMask plugin in order to facilitate wallet connection.",
    },
  ];

  return (
    <div className="container mt-4">
      <h1>Frequently Asked Questions</h1>
      <div className="mt-3">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-primary">{faq.question}</h5>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
