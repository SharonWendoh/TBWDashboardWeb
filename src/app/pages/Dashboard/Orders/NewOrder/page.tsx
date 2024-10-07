"use client"
import { SubmitButton } from "@/app/components/buttons/filled-button";
import { DatePickerField, DisabledFormTextField, FormTextField, RequiredFormTextField } from "@/app/components/textfields/form-text-fields";
import PasswordTextField from "@/app/components/textfields/password-text-field";
import { Grid } from "@mui/material";
export default function Page(){
    return (
        <div>
            <div>
                <h1>Order Details</h1>
            </div>
            <div>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DisabledFormTextField value="1234" label="Order-Id"/>
                        </Grid>
                        <Grid item xs={6}>
                            <FormTextField label="Total" placeholder="24,999" value="" onChange={() => {}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <RequiredFormTextField label="Name" placeholder="John Doe"value="" onChange={() => {}} />
                        </Grid>
                        <Grid item xs={6}>
                            <FormTextField label="Contact" placeholder="+254712345678" value="" onChange={() => {}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <DatePickerField />
                        </Grid>
                        <Grid item xs={6}>
                            <DatePickerField />
                        </Grid>
                        <Grid item xs={6}>
                            <FormTextField label="Flavour" placeholder="Vanilla" value="" onChange={() => {}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <FormTextField label="Size" placeholder="2 kg" value="" onChange={() => {}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <SubmitButton > Next </SubmitButton>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}