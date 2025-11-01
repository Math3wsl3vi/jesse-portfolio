import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata: Metadata = {
  title: "JESSE DUPLANTIS KULEI",
  description: "KEPhSA Security General",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${inter.variable} ${poppins.variable} font-sans`}>
      {children}
    </body>

    </html>
  );
}