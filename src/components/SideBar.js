"use client";

import { useState } from "react";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { title: "Workbench Summary", collapsedTitle: "W" },
    { title: "Cases Management", collapsedTitle: "C" },
    // Add more menu items here
  ];

  return (
    <div
      className="sidebar bg-dark text-white"
      style={{
        width: collapsed ? "80px" : "250px",
        transition: "width 0.3s ease",
      }}
    >
      <button
        className="btn btn-dark w-100"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? ">" : "<"}
      </button>
      <ul className="nav flex-column mt-3">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              className="nav-link text-light text-truncate"
              href="#"
              style={{ textAlign: collapsed ? "center" : "left" }}
            >
              {collapsed ? item.collapsedTitle : item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
