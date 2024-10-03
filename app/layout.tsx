import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Footer } from "@/components/ui";


const poppins = Poppins({ subsets: ["latin"], weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800", "900"]})

export const metadata: Metadata = {
  title: "SleepStiq",
  description: "SleepStiq"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </head>
      <body
        className={`${poppins} antialiased w-full`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
