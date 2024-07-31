"use client"
import { FilledButton } from "@/app/components/buttons/filled-button";
import OutlinedTextField from "@/app/components/textfields/outlined-text-field";
import { registerUser } from "@/app/lib/authentication";
import { AccountCircle } from "@mui/icons-material";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page(){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegisterClick = async () => {
        try {
            const response = await registerUser(username,password)
        } catch (error) {
            
        }
        // const result = await signIn('credentials', {
        //   redirect: false,
        //   username,
        //   password,
        // });
  
        // if (result?.ok) {
        //   router.push('/pages/Dashboard');
        // } else {
        //   console.error('Authentication Failed')
        // }
      };

    return(
        <main>
            <h1>
                Register
            </h1>
            <OutlinedTextField 
            placeholder="Username" 
            icon={<AccountCircle />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <OutlinedTextField 
            placeholder="Password" 
            icon={<LockRoundedIcon />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <FilledButton onClick={handleRegisterClick}>
                Login
            </FilledButton>
        </main>
    )
}