"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import "./globals.css";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Tourist Guide",
//   description: "Demo by Subhodeep",
// };

export default function RootLayout({ children }) {
  const [selectedState, setSelectedState] = useState('');
  const router = useRouter();

  return (
    <html lang="en">
      <Head>
        <title>Tourist Guide</title>
        <meta name="description" content="Demo by Subhodeep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Add this line */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div  className="relative min-h-screen bg-black">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              style={{
                width: '1000px',
                height: '1000px',
                borderRadius: '50%',
                background: 'rgba(68, 0, 128, 0.4)',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="relative max-w-200 mx-auto p-16 z-10 text-white min-h-250 bg-black">
            <div className="flex justify-between ">
              <h1 className="text-5xl inline-block font-bold mb-24 sm:mb-6 sm:text-2xl">Tourist Guide</h1>
              <Navbar />
            </div>
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
