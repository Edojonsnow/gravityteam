import localFont from "next/font/local";
import "./globals.css";
import { Autour_One, Electrolize } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const electrolize = Electrolize({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-electrolize",
});

const autourOne = Autour_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-autour-one",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const gilroy = localFont({
  src: "./fonts/Gilroy-Light.ttf",
  weight: "300",
  style: "normal",
  variable: "--font-gilroy",
});

export const metadata = {
  title: "  Matte Engine",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${autourOne.variable} ${gilroy.variable} ${geistMono.variable} ${electrolize.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
