"use client"
import { Height } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Card, CardContent, IconButton } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function LogOutIcon(){
    const router = useRouter();
    return(
        <IconButton onClick={() => {
            signOut()
            router.push('/pages/Login')
        }}>
            <LogoutIcon />
        </IconButton>
    )
}