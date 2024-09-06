import MenuDrawer from "@/app/components/app-bars/menu-bar";
import TopAppBar from "@/app/components/app-bars/top-app-bar";
import LogOutIcon from "@/app/components/icons/logout-icon";
import { Box } from "@mui/material";

export default function Layout({ children }: {children: React.ReactNode}){
    return (
        <Box sx={{ display: 'flex' }}>
            <TopAppBar />
            <MenuDrawer />
            <Box 
            component="main" 
            sx={{ 
                flexGrow: 1, 
                p: 3 , 
                mt: '32px',
            }}>
             {children}   
            </Box>
                
        </Box>
    )
}
