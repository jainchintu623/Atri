import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCart = () => {

    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
           <Grid item xs={6}>
              <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://asset.swarovski.com/images/$size_2000/t_swa002/c_scale,dpr_1.0,f_auto,w_2000/5510698_ms1/attract-necklace--square-cut--white--rose-gold-tone-plated-swarovski-5510698.jpg" alt="" />
                 <div className='ml-5 space-y-2'>
              <p className=''>Men Slim Mid Rise Black Jenas</p>
              <p className='opacity-50 text-xs font-semibold'>Size: M</p>
              <p className='opacity-50 text-xs font-semibold'>Color: Balck</p>
                 </div>
              </div>
           </Grid>

        <Grid item xs={2}>
            <p>Rs 1000</p>
        </Grid>

        <Grid item xs={4}>
       { true && <div>
        <p>
            <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
          <span>Deliverd On March 03</span>
          </p>
          <p className='text-xs'>
            Your Item Has Been Delivered
          </p>
       </div>
         
       }
           { false &&
             <p>
             <span>Expected Delivery On Mar 03</span>
         </p>
           }
        
        </Grid>

        </Grid>
    </div>
  )
}

export default OrderCart