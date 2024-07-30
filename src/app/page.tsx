"use client"
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { FilledButton } from "@/app/components/buttons/filled-button";
import OutlinedTextField from "@/app/components/textfields/outlined-text-field";
import { useRouter } from "next/navigation";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { signIn } from "next-auth/react";

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

export default function Home() {
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
      } else {
        console.error('Authentication Failed')
      }
    };
  return (
    <ThemeProvider theme={darkTheme}>
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

                  <OutlinedTextField 
                  placeholder="Password" 
                  icon={<LockRoundedIcon />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>

                  <FilledButton onClick={handleLoginClick}>
                      Login
                  </FilledButton>
              </Box>
          </Box>
        </main>
    </ThemeProvider>
  );
}
