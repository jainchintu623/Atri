import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div >
            <h1 className='text-lg font-bold py-7'>Delivery Address</h1>
        <AddressCard/>
    </div>
     <div className='py-20'>
        <OrderTracker activeStep={3}/>
     </div>

      <Grid className='space-y-5 ' container>
     {[1,1,1,1,1].map((item)=> 
        <Grid item container className='shadow-xl rounded-md  p-5 border' sx={{alignItems:"center" , justifyContent:"space-between"}}>
           <Grid item xs={6}>
             <div className='flex items-center space-x-4'>
                <img className='w-[7rem] h-[7rem] object-cover object-top' src="https://asset.swarovski.com/images/$size_2000/t_swa002/c_scale,dpr_1.0,f_auto,w_2000/5510698_ms1/attract-necklace--square-cut--white--rose-gold-tone-plated-swarovski-5510698.jpg" alt="" />

                <div className='space-y-2 ml-5'>
                    <p className='font-semibold '>men kurta</p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink </span> <span>Size: M</span></p>
                    <p>Seller: Linaria</p>
                    <p>Rs 1000</p>
                </div>
             </div>
             
           </Grid>

           <Grid  item >
            <Box xs={{color:deepPurple[500]}}>
             <StarBorderIcon  sx={{fontSize:"2rem"}}className='px-2 text-2xl'/>
             <span>Rate & Review Product</span>
            </Box>
           </Grid>
        </Grid>
)}      
      </Grid>

    </div>
  )
}

export default OrderDetails