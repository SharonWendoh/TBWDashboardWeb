"use client"
import { DatePickerField, DisabledFormTextField, FormTextField, RequiredFormTextField } from "@/app/components/textfields/form-text-fields";
import PasswordTextField from "@/app/components/textfields/password-text-field";
export default function Page(){
    return (
        <div>
            <div>
                <h1>Order Details</h1>
            </div>
            <div>
            <FormTextField label="Name" placeholder="John Doe" value="" onChange={() => {}}/>
                        <DisabledFormTextField value="1234"/>
                        <RequiredFormTextField label="Name" placeholder="John Doe"value="" onChange={() => {}} />
                            <DatePickerField />
            </div>
        </div>
    )
}