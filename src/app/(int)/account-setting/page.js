"use client";

import { useState } from "react";
import { useWallet } from "../../../ctx/WalletContext";

export default function AccountSettingsPage() {
  const { walletAddress } = useWallet();
  const [username, setUsername] = useState("JohnDoe123");

  const handleUsernameChange = (e) => setUsername(e.target.value);

  return (
    <div className="container mt-4">
      <h1>Account Settings</h1>
      <div className="mt-4">
        {/* Avatar */}
        <div className="d-flex align-items-center mb-4">
          <div
            className="avatar-circle me-3"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#6c757d",
            }}
          >
            {walletAddress ? username.charAt(0).toUpperCase() : "-"}
          </div>
        </div>

        {/* Wallet Address */}
        <div className="mb-4">
          <label htmlFor="wallet" className="form-label">
            Linked Wallet
          </label>
          <input
            type="text"
            id="wallet"
            className="form-control"
            value={walletAddress || "Not Connected"}
            disabled
          />
        </div>

        {walletAddress ? (
          <>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value="********"
                  disabled
                />
                <button className="btn btn-primary">Change Password</button>
              </div>
            </div>

            {/* Joined Date */}
            <div className="mt-4 text-muted">
              <hr />
              <p>Joined on 2024-01-01</p>
            </div>
          </>
        ) : (
          <div className="alert alert-warning mt-4" role="alert">
            Please connect your wallet to view your account details.
          </div>
        )}
      </div>
    </div>
  );
}
