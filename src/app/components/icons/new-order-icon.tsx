"use client"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NewOrderIcon(){
    const router = useRouter();
    return(
        <IconButton onClick={() => {
            router.push('/pages/Dashboard/Orders/NewOrder')
        }}>
            <AddOutlinedIcon />
        </IconButton>
    )
}