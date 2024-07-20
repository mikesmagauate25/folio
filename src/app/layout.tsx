import type { Metadata } from "next";

import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import { machina, monument } from "./utils/customFont";
import Footers from "./components/Footer";

export const metadata: Metadata = {
  title: "Mikes Maguate",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monument.variable} ${machina.variable}`}>
        <HeaderNav />
        <main className="px-2">{children}</main>
        <Footers />
      </body>
    </html>
  );
}
