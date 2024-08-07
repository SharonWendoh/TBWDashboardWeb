// "use client"
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

export default async function Home() {
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
