import "./css/styles.css";

import { Inter } from "next/font/google";
import Header from "@/components/webstories/Header";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>WebStories</title>
      <body
        className={` ${inter.className} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className={`flex flex-col   min-h-screen  `}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
