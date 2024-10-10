"use client"
import { Box, MenuItem, TextField } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";

interface TextFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface NumberFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DisabledTextFieldProps {
  value: string;
  label: string;
}

interface SelectTextFieldProps {
  label: string;
  //name: string;
  //helperText: string;
  //value: string;
  //data: ["Vanilla", "Chocolate"];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const data = ["Vanilla", "Chocolate"];

export function FormTextField({
  label,
  name, 
  placeholder,
  value,
  onChange,
}: TextFieldProps){
    return(
        <TextField 
        id="outlined-basic" 
        label={label} 
        name={name}
        fullWidth
        variant="outlined" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}

export function NumberTextField({
  label,
  name, 
  placeholder,
  value,
  onChange,
}: NumberFieldProps){
    return(
        <TextField 
        id="outlined-basic" 
        label={label} 
        name={name}
        fullWidth
        variant="outlined" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}

export function DisabledFormTextField({
  value,
  label,
}: DisabledTextFieldProps){
  return(
    <TextField
      disabled
      id="outlined-disabled"
      label={label}
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
      <Box sx={{ width: '100%' }}>
        <DatePicker 
          label="Select date" 
          sx={{ width: '100%' }}
          />
      </Box>
    </LocalizationProvider>
  );
}

export function TimePickerField(){
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ width: '100%' }}>
          <TimePicker 
            label="Select Time" 
            sx={{ width: '100%' }}  // Set full width via sx prop
          />
      </Box>
    </LocalizationProvider>
  );
}

export function SelectTextField({
  label, 
  //helperText,
  //data,
  onChange,
}: SelectTextFieldProps){
  return(
    <TextField
          id="outlined-select-currency"
          select
          label={label}
          fullWidth
          defaultValue="EUR"
          //helperText={helperText}
          onChange={onChange}
        >
          {data.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
  )
}

export function MultilineTextField({
  label,
  name, 
  placeholder,
  value,
  onChange,
}: TextFieldProps){
    return(
        <TextField 
        id="outlined-multiline-static" 
        label={label} 
        name={name}
        multiline
        fullWidth
        rows={4}
        variant="outlined" 
        //placeholder={placeholder}
        //value={value}
        onChange={onChange}
        />
    )
}
