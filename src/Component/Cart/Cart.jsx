import React, { useEffect } from 'react'

import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/ActionType';
import { store } from '../../../State/Store';

function Cart() {

    const navigate = useNavigate();
  const dispatch = useDispatch()
  const {cart} =useSelector(store=>store)
    const handleChekOut = ()=>{
      
     navigate('/ChekOut?step=2')
    }
    useEffect(()=>{
      dispatch(getCart())
    },[dispatch])
  return (
   
    
    <div style={{backgroundColor:"#BDC6B5"}}>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
       
       <div className='col-span-2'>
       {cart.cart?.cartItems?.map((item) => (
        <CartItem key={item.id} item={item}/>
      ))}
       </div>
      
       <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border p-3'>
                 <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                 <hr />
                 <div className='space-y-3 font-semibold mb-10'>
                   <div className='flex justify-between pt-3 text-black'>
                      <span>Price</span>
                      <span>Rs {cart.cart?.totalPrice}</span>
                   </div>
                   <div className='flex justify-between pt-3 '>
                      <span>Discount</span>
                      <span className='text-green-600'>-Rs {cart.cart?.totalDiscountPrice}</span>
                   </div>
                   <div className='flex justify-between pt-3 '>
                      <span>Delevery Charges</span>
                      <span className='text-green-600'>Free</span>
                   </div>
                   <div className='flex justify-between pt-3 '>
                      <span>Total Amount</span>

                      <span className='text-green-600'>{cart.cart?.totalPrice}</span>
                   </div>
                 </div>
                 <Button onClick={handleChekOut}   variant="content " className='w-full mt-4' sx={{px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd" ,mt:"1rem"}}>
                    Chekout
                </Button>
            </div>
          </div>
        </div>
         
    </div>
  )
}

export default Cart
