import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const exo = Exo_2({
    weight: ['300', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: "MasChain Explorer",
  description: "MasChain Block Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <div className="min-h-screen fixed -z-10 min-w-full bg-gradient-to-r from-[#399ad5] to-[#2c2c6e]"></div>
        <div className="w-full px-10 md:px-24 lg:px-56 pt-[80px]">
          <img src="/mascan.svg" alt="MasLogo" />
        </div>
        {children}
      </body>
    </html>
  );
}
