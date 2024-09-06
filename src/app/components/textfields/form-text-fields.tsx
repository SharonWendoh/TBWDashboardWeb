"use client"
import { TextField } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface DisabledTextFieldProps {
  value: string;
}
export function FormTextField({
  label,
  placeholder,
  value,
  onChange,
}: TextFieldProps){
    return(
        <TextField 
        id="outlined-basic" 
        label={label} 
        variant="outlined" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}

export function DisabledFormTextField({
  value
}: DisabledTextFieldProps){
  return(
    <TextField
      disabled
      id="outlined-disabled"
      label="Disabled"
      defaultValue={value}
    />
  )
}

export function RequiredFormTextField({
  label,
  placeholder,
  value,
  onChange,
}: TextFieldProps){
  return(
      <TextField 
      required
      id="outlined-basic" 
      label={label} 
      variant="outlined" 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
  )
}

export function DatePickerField(){
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}