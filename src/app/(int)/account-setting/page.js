import React from "react";

export default function AccountSettingsPage() {
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
            A
          </div>
          <button className="btn btn-primary">Change Avatar</button>
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            defaultValue="JohnDoe123"
          />
        </div>

        {/* Linked Wallet */}
        <div className="mb-4 d-flex align-items-center">
          <div>
            <label htmlFor="wallet" className="form-label">
              Linked Wallet
            </label>
            <input
              type="text"
              id="wallet"
              className="form-control"
              defaultValue="0x123...456"
              disabled
            />
          </div>
          <button className="btn btn-primary ms-3">Relink</button>
        </div>

        {/* Password */}
        <div className="mb-4 d-flex align-items-center">
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value="********"
              disabled
            />
          </div>
          <button className="btn btn-primary ms-3">Change Password</button>
        </div>

        {/* Joined Date */}
        <div className="mt-4 text-muted">
          <hr />
          <p>Joined on 2024-01-01</p>
        </div>
      </div>
    </div>
  );
}
