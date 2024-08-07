'use client'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import React from "react";

interface TextFieldProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
export default function PasswordTextField({
    placeholder,
    value,
    onChange
  }: TextFieldProps){
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
      
    return(
        <OutlinedInput
        id="outlined-adornment-weight"
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        startAdornment={
            <InputAdornment position="start">
                <LockRoundedIcon />
            </InputAdornment>
        }
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
        label="Password"
    />
    )
}