import { Box, Grid } from "@mui/material";
import { DatePickerField, DisabledDatePickerField, FormTextField, MultilineTextField, TimePickerField } from "../textfields/form-text-fields";

export default function ClientDetailsForm({ formData, handleChange, handleDateChange, handleTimeChange }: any){
    return(
        <Box>
            <Box sx={{ flexGrow: 1, mt: '32px'}}>
                <Grid container spacing={3} mb={4}>
                <Grid item xs={12} md={6}>
                        <FormTextField 
                            label="Name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <FormTextField 
                            label="Contact"
                            name="contact"
                            placeholder="070000000"
                            value={formData.contact}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, mt: '32px'}}>
                <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={6}>
                        <DatePickerField 
                        label="Select Delivery date"
                        // name="deliveryDate"
                        value={formData.date}
                        onChange={(newValue) => handleDateChange("date", newValue)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TimePickerField 
                        label="Select Time"
                        // name="deliveryTime"
                        value={formData.time}
                        onChange={(newValue) => handleTimeChange("time", newValue)}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, mt: '32px'}}>
                <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={6}>
                        <DisabledDatePickerField 
                        label="Entry Date"
                        value={formData.entryDate}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormTextField 
                            label="Attendant"
                            name="attendant"
                            placeholder="Sharon"
                            value={formData.attendant}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, mt: '32px'}}>
                <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={12}>
                        <MultilineTextField 
                            label="Delivery location"
                            name="deliveryLocation"
                            placeholder="CBD"
                            value={formData.deliveryLocation}
                            onChange={handleChange}
                        />
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}