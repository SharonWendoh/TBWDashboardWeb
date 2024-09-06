'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutIcon from "./components/icons/logout-icon";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TreatsbyWendoh Dashboard",
//   description: "Generated by create next app",
// };
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#FFA833'
    },
    secondary: {
      main: '#242424',
      light: '#3F3F3F',
      dark: '#121212'
    }
  }
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const session = await getServerSession();
  return (
    <ThemeProvider theme={darkTheme}>
     <html lang="en">
        <body className={inter.className}>
          {children}</body>
      </html>
    </ThemeProvider>
  );
}
