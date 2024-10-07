"use client"
import MenuDrawer from "@/app/components/app-bars/menu-bar";
import TopAppBar from "@/app/components/app-bars/top-app-bar";
import LogOutIcon from "@/app/components/icons/logout-icon";
import { Box } from "@mui/material";

export default function Page(){
    return(
        <main>
            <Box
                marginLeft={0} 
                justifyContent="flex-start" 
            >
                <h1>
                    <LogOutIcon />
                    Dashboard
                </h1>
            </Box>
        </main>
    )
}