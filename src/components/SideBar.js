'use client';

import { useState } from 'react';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-dark text-white ${collapsed ? 'sidebar-collapsed' : ''}`} style={{ width: collapsed ? '80px' : '250px' }}>
      <button className="btn btn-dark w-100" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </button>
      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Workbench Summary</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Cases Management</a>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
}
