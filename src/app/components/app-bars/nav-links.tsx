import SettingsIcon from '@mui/icons-material/Settings';
import WindowIcon from '@mui/icons-material/Window';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

interface LinkProps {
    open: boolean;
}

const links = [
    { name: 'Dashboard', href: '/pages/Dashboard', icon: WindowIcon},
    { name: 'Orders', href: '/pages/Dashboard/Orders', icon: ShoppingBagOutlinedIcon},
    { name: 'Transactions', href: '/pages/Dashboard/Lines', icon: TimelineOutlinedIcon},
    { name: 'Menu', href: '/pages/Dashboard/Menu', icon: RestaurantMenuOutlinedIcon},
    { name: 'Customers', href: '/pages/Dashboard/Settings', icon: PeopleAltOutlinedIcon},
    { name: 'Accounts', href: '/pages/Dashboard/Settings', icon: SettingsIcon},
    { name: 'Calendar', href: '/pages/Dashboard/Settings', icon: SettingsIcon},
    { name: 'Inventory', href: '/pages/Dashboard/Settings', icon: SettingsIcon},
    { name: 'Settings', href: '/pages/Dashboard/Settings', icon: SettingsIcon}
]

export default function NavLinks(
    {
        open
    }: LinkProps
){
    const pathname = usePathname();
    
    return(
        <>
            {links.map((link) => (
                <ListItem key={link.name} disablePadding sx={{ display: 'block' }}>
                <NextLink href={link.href}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      backgroundColor: pathname === link.href ? 'rgba(0, 0, 0, 0.08)' : 'inherit',
                                '&:hover': {
                                    backgroundColor: pathname === link.href ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                                },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <link.icon />
                    </ListItemIcon>
                    <ListItemText primary={link.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </NextLink>
              </ListItem>
            ))}

        </>
    );
}