"use client"
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { FilledButton } from "@/app/components/buttons/filled-button";
import OutlinedTextField from "@/app/components/textfields/outlined-text-field";
import { redirect, useRouter } from "next/navigation";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import LogOutIcon from "./components/icons/logout-icon";

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

export default async function Home() {
  // const router = useRouter();
  //const session = getServerSession();
  // const { data: session } = useSession()

  // useEffect(() => {
  //   const checkSession = () => {
  //     if (session) {
  //       router.push('/pages/Dasboard')
  //     } else {
  //       router.push('/pages/Login')
  //     }
  //   }
  //   checkSession();
  // }, [router]);
  const session = await getServerSession();
  return (
    <main>
      {!!session && 
        redirect('/pages/Dashboard')
        }
        {!session && 
        redirect('/pages/Login')}
      Loading...
    </main>
  )
}
