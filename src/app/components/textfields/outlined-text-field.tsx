import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

interface TextFieldProps {
  placeholder: string;
  icon: React.ReactNode;
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function OutlinedTextField({
  placeholder,
  icon,
  // value,
  // onChange,
  onClick
}: TextFieldProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic"  
      placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }}
      variant="outlined" />
    </Box>
  );
}
