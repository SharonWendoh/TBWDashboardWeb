"use client"
import MenuDrawer from "@/app/components/app-bars/menu-bar";
import TopAppBar from "@/app/components/app-bars/top-app-bar";
import LogOutIcon from "@/app/components/icons/logout-icon";
import { DatePickerField, DisabledFormTextField, FormTextField, RequiredFormTextField } from "@/app/components/textfields/form-text-fields";
import PasswordTextField from "@/app/components/textfields/password-text-field";
import { Box } from "@mui/material";

export default function Page(){
    return(
        <main>
            <Box
                marginLeft={0} 
                justifyContent="flex-start" 
            >
                <h1>
                    <LogOutIcon />
                    Dashboard
                    <FormTextField label="Name" placeholder="John Doe" value="" onChange={() => {}}/>
                        <DisabledFormTextField value="1234"/>
                        <RequiredFormTextField label="Name" placeholder="John Doe"value="" onChange={() => {}} />
                            <DatePickerField />
                </h1>
            </Box>
        </main>
    )
}