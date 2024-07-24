import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

interface TextFieldProps {
  placeholder: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function OutlinedTextField({
  placeholder,
  icon,
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
