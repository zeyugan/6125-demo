import ".././globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

import { WalletProvider } from "../../ctx/WalletContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <div className="d-flex">
            <SideBar />
            <div className="flex-grow-1">
              <TopBar />
              <main className="p-3">{children}</main>
            </div>
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}
