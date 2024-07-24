import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function FilledButton({
    children,
    onClick
}: ButtonProps)
{
    return (
        <Button variant="contained" size="large"
        sx={{
            width: 225,
            height: 51,
            fontSize: 18,
            textTransform: 'none',
            borderRadius: 3
        }}
        onClick={onClick}
        >
            {children}
        </Button>
    )
}