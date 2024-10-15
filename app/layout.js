import { Inter } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interFontFamily.variable}`}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
