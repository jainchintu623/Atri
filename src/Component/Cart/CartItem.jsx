import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem =({item}) =>{
  return (
    <div className="p-5 shadow-lg border rounded-md mt-12 mb-12">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 scroll-py-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70 mt-2">{item.product.description}</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-5">
            <p className="font-semibold">Rs {item.product.discountedPrice}</p>
            <p className="font-semibold line-through opacity-50">Rs {item.product.price}</p>
            <p className="font-semibold text-green-600 ">{item.product.discountPersent}% off</p>
          </div>
        </div>
    
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
          <IconButton>
           <RemoveCircleOutlineIcon/>
          </IconButton>
          <span className="py-1 px-7 border  rounded-sm"> 3</span>
            <IconButton sx={{color:"blue"}}>
            <AddCircleOutlineIcon/>
            </IconButton>

         
          </div>

            <div>
              <Button className="blue">
                Remove
              </Button>
            </div>

        </div>
    </div>
  );
}

export default CartItem;
