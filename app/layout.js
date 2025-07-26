import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aditya Semalti",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-purple-500 to-blue-500`}
      >
        <div className=" w-full py-4">
          <div className="h-16 w-full">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-96px)] w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}

