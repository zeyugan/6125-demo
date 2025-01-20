import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Crypto Money",
  description: "Crypto financing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="p-3">{children}</main>
      </body>
    </html>
  );
}
