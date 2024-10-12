import { Box, Grid, MenuItem, Select } from "@mui/material";
import { FormTextField, MultilineTextField, NumberTextField, SelectTextField } from "../textfields/form-text-fields";

interface OrderDetailsFormProps {
    formData: any;
    handleChange: any;
    cakeFlavours: CakeFlavour[] | null; // Accept cakeFlavours as prop
}

export default function OrderDetailsForm({ formData, handleChange, cakeFlavours }: OrderDetailsFormProps){
    return(
        <Box>
                <Box sx={{ flexGrow: 1, mt: '32px'}}>
                    <Grid container spacing={3} mb={4}>
                        <Grid item xs={12} md={6}>
                            <SelectTextField 
                                label="Flavour"
                                name="flavour"
                                value={formData.flavour}
                                onChange={handleChange}
                                data={cakeFlavours || []}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <NumberTextField 
                                label="Size"
                                name="size"
                                placeholder="1"
                                value={formData.size}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, mt: '32px'}}>
                    <Grid container spacing={3} mb={4}>
                        <Grid item xs={12} md={6}>
                            <MultilineTextField 
                                label="Design"
                                name="design"
                                placeholder="Design"
                                value={formData.design}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MultilineTextField 
                                label="Additional_description"
                                name="additionalDescription"
                                placeholder="Description"
                                value={formData.additionalDescription}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, mt: '32px'}}>
                    <Grid container spacing={3} mb={4}>
                        <Grid item xs={12} md={6}>
                            <NumberTextField 
                                label="Total"
                                name="total"
                                placeholder="0 ksh"
                                value={formData.total}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                            name="status"
                            defaultValue={"Booked"}
                            value={formData.status}
                            onChange={handleChange}
                            fullWidth
                            >
                                <MenuItem value={"Booked"}>Booked</MenuItem>
                                <MenuItem value={"Confirmed"}>Confirmed</MenuItem>
                                <MenuItem value={"In progress"}>In progress</MenuItem>
                                <MenuItem value={"Completed"}>Completed</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, mt: '32px'}}>
                    <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={6}>
                            <NumberTextField 
                                label="Deposit"
                                name="deposit"
                                placeholder="0 ksh"
                                value={formData.deposit}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <NumberTextField 
                                label="Balance"
                                name="balance"
                                placeholder="0 ksh"
                                value={formData.balance}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
    )
}