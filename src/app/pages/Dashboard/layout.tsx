import MenuDrawer from "@/app/components/app-bars/menu-bar";
import TopAppBar from "@/app/components/app-bars/top-app-bar";
import { Box } from "@mui/material";

export default function Layout({ children }: {children: React.ReactNode}){
    return (
<Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column", // Make sure content stacks below each other
      }}
    >
      <TopAppBar />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          padding: 3,
          marginTop: "64px", // Account for the height of the AppBar
        }}
      >
        <MenuDrawer />
        {children}
      </Box>
    </Box>
    )
}
