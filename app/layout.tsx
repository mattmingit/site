import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matteomontanari.com"),
  title: { default: "Matteo Montanari", template: "%s | Matteo Montnari" },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col justify-center items-center min-h-[100vh] w-auto">
            <div className="flex flex-none flex-row items-start gap-[80px] justify-start flex-nowrap h-auto pt-[80px]">
              <div className="sticky">
                <Navbar />
              </div>
              <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0">
                <div className="">{children}</div>
                <div className="w-[100%] items-start justify-start pt-[100px]">
                  <Footer />
                </div>
              </div>
              <div className="flex flex-none flex-col items-start min-w-[100px] min-h-[221px]"></div>
            </div>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
