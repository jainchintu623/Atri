import React, { useEffect } from 'react';
import './product.css'

import { useDispatch, useSelector } from 'react-redux';
import {findProducts} from '../../../State/Product/Action'
import { store } from '../../../State/Store';
import { Pagination } from '@mui/material';
import {  useNavigate } from 'react-router-dom';


const AllProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {products} = useSelector(store=>store)
  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const id = searchParams.get('_id');
  const colorValue = searchParams.get('color');
  const sizeValue = searchParams.get('size');
  const priceValue = searchParams.get('price');
  const discount = searchParams.get('discount');
  const sortValue = searchParams.get('sort');
  const pageNumber = searchParams.get('page') || 1;
  const stock = searchParams.get('stock');

  const handlePaginationChange =(event,value)=>{
    const searchParams = new URLSearchParams(location.search)
    searchParams.set("page",value);
    const query = searchParams.toString();
    navigate({search:`?${query}`})
  }
  
 


  useEffect(()=>{
    const [minPrice , maxPrice ]= priceValue == null?[0,1000]:priceValue.spilt('-').map(Number);
    const data ={
      colors:colorValue || [],
      sizes:sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount:discount || 0,
      sort: sortValue || "price_low",
      pageNumber:pageNumber-1,
      pageSize:5,
      stock:stock
      
    }
    dispatch(findProducts(data))

  },[
     colorValue,
     sizeValue,
     priceValue,
     discount,
     sortValue,
     pageNumber,
     stock,
     dispatch
  ])

  const handleNavigate=()=>{
    console.log(products?._id);

    navigate('/allProducts/'+ products.id)
   
  }

  return (
       <div className="products" style={{backgroundColor:"#BDC6B5"}} >
      <div className="products-section">
        <div className="product-section-header-template flex  items-center">
           <div className="container product-section-header-template-head">
            <h1>Jewelry: Earrings, Bracelets,<br />  Necklaces and Rings</h1>
            <p className='pt-4 font-semibold'>Looking for wear-forever fashion jewelry? You've come to the right place. <br />  Expect necklaces, earrings, rings, and everything in-between with crystal <br /> designs that make a   unique statement, day or night.</p>
           </div>
        </div>

        <div onClick={handleNavigate} className="grid grid-cols-1 pt-10 pb-10 xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 col-10 m-auto" >
          {products.products && products.products?.content?.map((products) => (
            <a key={products.id} href={products.href} className="group bg-white col-span-0" style={{border:"1px solid #000"}}>
              <div className=" product-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative" >
                <img
                  src={products.imageUrl}
                  alt={products.imageUrl}
                  className="h-full   w-full object-cover object-center "
                />
                <img
                  src={products.imageHover}
                  alt={products.imageHover}
                  className="product-img-hover  absolute top-0  h-full w-full object-cover object-center"
                />
              </div>
              <div className=' p-3'>
              <h2 className="mt-2 text-lg text-gray-900 font-medium">{products.name}</h2>
               <p className="mt-2 text-sm font-medium text-gray-900">{products.description.slice(0,40)}..</p>
               <h2 className="mt-2 text-lg text-gray-900 font-medium">₹ {products.price}</h2>
               <p className="mt-2 text-sm font-medium text-gray-900">{products.MRP}</p>
              
              </div>
              
           
            
            </a>
          ))}
        </div>
      </div>
      <section className='w-full px=[3.6rem]'>
      <div className="px-4 py-5 flex justify-center">
      <Pagination count={products.products?.totalPages} onChange={handlePaginationChange} color="secondary" />
        </div>
      </section>
    </div>
   
  );
};

export default AllProducts;
