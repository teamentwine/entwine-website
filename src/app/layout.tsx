import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footerbar from "./components/Footer";

export const metadata: Metadata = {
    title: "Entwine",
    description: "A platform for connecting like-minded nonprofit organizations"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><title>Entwine</title></head>
      <body>
        <Navbar/>
        {children}
        <Footerbar />
      </body>
    </html>
  );
}
