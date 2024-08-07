"use client"
import { Height } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Card, CardContent, IconButton } from '@mui/material';
import { signOut } from 'next-auth/react';
export default function LogOutIcon(){
    return(
        <IconButton onClick={() => {
            signOut()
        }}>
            <LogoutIcon />
        </IconButton>
    )
}