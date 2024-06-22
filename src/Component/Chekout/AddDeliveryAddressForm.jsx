import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const AddDeliveryAddressForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        const data = new FormData(e.currentTarget)
        const address={
            FirstName:data.get("FirstName"),
            LastName:data.get("LastName"),
            StreetAddress:data.get("Address"),
            State:data.get("State"),
            ZipCode:data.get("ZipCode"),
           PhoneNo:data.get("PhoneNo")

        }
        console.log("address", address)
    }

  return (
    <div>
      <Grid container spacing={4} >
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="content"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="FirstName"
                    name="FirstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="LastName"
                    name="LastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="State"
                    name="State"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="ZipCode"
                    name="ZipCode"
                    label="Zip / Postal Code"
                    fullWidth
                     autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="PhoneNo"
                    name="PhoneNo"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
              sx={{ py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="content"
              type="submit"
            >
              Deliver Here
            </Button>
                </Grid>
                

              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDeliveryAddressForm;
