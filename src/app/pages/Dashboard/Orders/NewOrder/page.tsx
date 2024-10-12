"use client"
import ClientDetailsForm from "@/app/components/forms/client_details_form";
import OrderDetailsForm from "@/app/components/forms/order_details_form";
import CustomizedSteppers from "@/app/components/steppers/orders_stepper";
import { DatePickerField, FormTextField, MultilineTextField, SelectTextField, TimePickerField } from "@/app/components/textfields/form-text-fields";
import { Box, Button, Grid, Snackbar, SnackbarCloseReason, TextField } from "@mui/material";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [cakes, setCakes] = useState<CakeFlavour[] | null>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
      name: '',
      flavour: '',
      size: 0,
      date: '',
      status:'',
      time: '',
      total: 0,
      contact: '',
      attendant: '',
      deposit: 0,
      balance: 0,
      deliveryLocation: '',
      additionalDescription: '',
      design: '',
      entryDate: ''
    });
    const steps = ['Order Details','Client Details', 'Confirm Details'];
  
    useEffect(() => {
        async function fetchCakes() {
            setLoading(true); // Set loading to true when fetching data
            setError(null); // Clear previous errors
            try{
                const response = await fetch(`/api/cakes?`)
                const data = await response.json();
                setCakes(data.data);
                setLoading(false);
                
            
            } catch (error) {
                console.error('Failed to fetch cakes', error);
                setLoading(false);
            }
    
        }
        fetchCakes();
    },[])
    const handleNext = () => {
      setActiveStep((prevStep) => prevStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevStep) => prevStep - 1);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (field: string, newValue: any) => {
        setFormData({ ...formData, [field]: newValue ? newValue.format("YYYY-MM-DD") : '' });
    };
    
    const handleTimeChange = (field: string, newValue: any) => {
    setFormData({ ...formData, [field]: newValue ? newValue.format("hh:mm A") : null });
    };
    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        router.push('/pages/Dashboard/Orders')
      };
  
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    flavour: formData.flavour,
                    size: formData.size,
                    date: formData.date,  // Ensure this is in the correct format
                    status: 'Booked',
                    time: formData.time,  // Ensure this is in the correct format
                    total: formData.total,
                    contact: formData.contact,
                    attendant: formData.attendant,
                    deposit: formData.deposit,
                    delivery_location: formData.deliveryLocation,
                    additional_description: formData.additionalDescription,
                    image: null // Adjust if needed
                })
            })
            if (!response.ok) {
                throw new Error('Failed to save order');
            }
    
            const result = await response.json();
            console.log('Order saved successfully:', result);
            setOpen(true);
        } catch (error) {
            console.error('Error saving order:', error);
        }
      //console.log(formData); // Handle form submission here
    };
  
    const renderStepContent = (step: number) => {
      switch (step) {
        case 0:
          return (
            <OrderDetailsForm 
            formData={formData} 
            handleChange={handleChange}
            cakeFlavours={cakes}
            />
          );
        case 1:
          return (
            <ClientDetailsForm 
            formData={formData} 
            handleChange={handleChange} 
            handleDateChange={handleDateChange}
            handleTimeChange={handleTimeChange}
            />
          );
        case 2:
          return (
            <Box>
              <h3>Confirm your details:</h3>
              <p><strong>Flavour:</strong> {formData.flavour}</p>
              <p><strong>Size:</strong> {formData.size}</p>
              <p><strong>Design:</strong> {formData.design}</p>
              <p><strong>Additional Description:</strong> {formData.additionalDescription}</p>
              <p><strong>Total:</strong> {formData.total}</p>
              <p><strong>Deposit:</strong> {formData.deposit}</p>
              <p><strong>Balance:</strong> {formData.balance}</p>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Contact:</strong> {formData.contact}</p>
              <p><strong>Delivery Date:</strong> {formData.date}</p>
              <p><strong>Delivery Time:</strong> {formData.time}</p>
              <p><strong>Entry Date:</strong> {formData.entryDate}</p>
              <p><strong>Attendant:</strong> {formData.attendant}</p>
              <p><strong>Delivery Location:</strong> {formData.deliveryLocation}</p>
              {/* Add more confirmation details as needed */}
            </Box>
          );
        default:
          return null;
      }
    };

    return (
      <Box sx={{ 
        width: '100%', 
        p: 5,
        mt: 5,
        background: "#242424"
        }}>
        {/* Stepper Component */}
        <CustomizedSteppers activeStep={activeStep} />
  
        {/* Form Content */}
        {renderStepContent(activeStep)}
  
        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
        <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Order saved successfully"
      />
      </Box>
    );
  }