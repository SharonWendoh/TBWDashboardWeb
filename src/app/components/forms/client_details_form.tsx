import { Box, Grid } from "@mui/material";
import { DatePickerField, FormTextField, MultilineTextField, TimePickerField } from "../textfields/form-text-fields";

export default function ClientDetailsForm({ formData, handleChange }: any){
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
                        <DatePickerField />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TimePickerField />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, mt: '32px'}}>
                <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={6}>
                        <FormTextField 
                            label="Status"
                            name="status"
                            placeholder="Booked"
                            value={formData.status}
                            onChange={handleChange}
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
                            label="Delivery Location"
                            name="Delivery Location"
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