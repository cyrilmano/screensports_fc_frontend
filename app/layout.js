import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Screensports FC - Football Academy",
  description: "Professional football academy developing the next generation of talent through expert coaching and state-of-the-art facilities.",
  keywords: "football academy, soccer training, youth development, elite training, goalkeeper academy, football coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
