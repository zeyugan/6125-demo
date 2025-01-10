'use client';

export default function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <a className="navbar-brand" href="#">Decentralized Finance</a>
      <div className="ms-auto d-flex align-items-center">
        <span className="text-light">Placeholder User TODO MetaMask</span>
        <div className="ms-3">
          <img src="/avatar.png" alt="Avatar" width="40" height="40" className="rounded-circle" />
        </div>
      </div>
    </nav>
  );
}
