"use client"
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { FilledButton } from "@/app/components/buttons/filled-button";
import OutlinedTextField from "@/app/components/textfields/outlined-text-field";
import { useRouter } from "next/navigation";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

    const handleLoginClick = () => {
      router.push('/pages/Dashboard');
      // const credentials = { email, password };
      // try {
      //   await authenticate(credentials);
      //   router.push('/pages/Dashboard');
      // } catch (error){
      //    console.error('Authentication failed', error);
      //   }
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
                  <OutlinedTextField placeholder="Username" icon={<AccountCircle />}/>
                  <OutlinedTextField placeholder="Password" icon={<LockRoundedIcon />}/>
                  <FilledButton onClick={handleLoginClick}>
                      Login
                  </FilledButton>
              </Box>
          </Box>
        </main>
    </ThemeProvider>
  );
}
