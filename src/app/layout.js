import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bell07734",
  description: "Bell07734",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Bell07734.png" sizes="any" />
      <body className={inter.className}>
        <nav id="navbar">
          <li id="navbarItems">
            <ul className="navbarItem navbarIconContainer">
              <a href="#">
                <img className="navbarIcon" src="/Bell07734.png" />
              </a>
            </ul>
            <ul className="navbarItem">
              <a href="#">Home</a>
            </ul>
            <ul className="navbarItem right">
              <a href="#">About</a>
            </ul>
            <ul className="navbarItem">
              <a href="#">Stupid Stuff</a>
            </ul>
          </li>
        </nav>
        {children}
      </body>
    </html>
  );
}
