import { Inter } from "next/font/google";
import Link from "next/link";
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
              <Link href="#">
                <img className="navbarIcon" src="/Bell07734.png" />
              </Link>
            </ul>
            <ul className="navbarItem">
              <Link href="#">Home</Link>
            </ul>
            <ul className="navbarItem right">
              <Link href="#">About</Link>
            </ul>
            <ul className="navbarItem">
              <Link href="#">Stupid Stuff</Link>
            </ul>
          </li>
        </nav>
        {children}
      </body>
    </html>
  );
}
