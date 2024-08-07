import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutIcon from "./components/icons/logout-icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TreatsbyWendoh Dashboard",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {!!session && 
        <LogOutIcon />
        }
        {!session && 
        redirect('/pages/Login')} */}
        {children}</body>
    </html>
  );
}
