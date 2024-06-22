import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/base'
import CartItem from '../Cart/CartItem'

const OrderSummery = () => {
  return (
    <div >
       <div className='p-5 shadow-lg rounded-md border '>
          <AddressCard/>
       </div>
       <div>
        <div className='lg:grid grid-cols-3  lg:px-16 relative'>
       
       <div className='col-span-2'>
      {[1,1,1,1].map((item)=> <CartItem/>)}
       </div>
      
       <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border p-3'>
                 <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                 <hr />
                 <div className='space-y-3 font-semibold mb-10'>
                   <div className='flex justify-between pt-3 text-black'>
                      <span>Price</span>
                      <span>Rs 4697</span>
                   </div>
                   <div className='flex justify-between pt-3 '>
                      <span>Discount</span>
                      <span className='text-green-600'>-Rs 4697</span>
                   </div>
                   <div className='flex justify-between pt-3 '>
                      <span>Delevery Charges</span>
                      <span className='text-green-600'>Free</span>
                   </div>
                   <div className='flex justify-between pt-3 '>
                      <span>Total Amount</span>
                      <span className='text-green-600'>Rs 1278</span>
                   </div>
                 </div>
                 <Button variant="content " className='w-full mt-4' sx={{px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd" ,mt:"1rem"}}>
                    Chekout
                </Button>
            </div>
          </div>
        </div>
         
    </div>
    </div>
  )
}

export default OrderSummery
