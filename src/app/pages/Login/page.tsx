"use client"
import { FilledButton } from "@/app/components/buttons/filled-button";
import OutlinedTextField from "@/app/components/textfields/outlined-text-field";
import { AccountCircle } from "@mui/icons-material";
import { Box } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import PasswordTextField from "@/app/components/textfields/password-text-field";

export default function Page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLoginClick = async () => {

      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (result?.ok) {
        router.push('/pages/Dashboard');
        router.refresh
      } else {
        console.error('Authentication Failed')
      }
    };
  return (
      <main>
          <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '16px'
              }}
              >
                  <Image
                  src="/logo.png"
                  alt="TreatsbyWendoh Logo"
                  width={359}
                  height={72}
                  style={{ marginBottom: '0px' }}
              />
              </Box>
              <Box sx={{
                  minHeight: '325px',
                  width: '356px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: 'transparent',
                  padding: '2px',
                  borderRadius: '8px',
                  
              }}>
                  <OutlinedTextField 
                  placeholder="Username" 
                  icon={<AccountCircle />}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}/>

                  <PasswordTextField 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>

                  <FilledButton onClick={handleLoginClick}>
                      Login
                  </FilledButton>
              </Box>
          </Box>
        </main>
  )
}