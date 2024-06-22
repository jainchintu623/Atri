import React, { Fragment } from 'react'
import './CustomOrder.css'
import { Input, Select, TextField } from '@mui/material'

export default function CustomOrder() {
  return (
  <Fragment>
    <section className='Custom_order-section'>
        <div className="Custom-order-content">
     <div className="Custom-Order_head">
        <h1>CUSTOM ORDER <span>REQUEST</span></h1>
        <p>Indulge in the art of personalization on our jewelLEry detail page. With our intuitive customization tools, designing your dream jewelry becomes an effortless and enjoyable experience. Elevate your accessorizing game and make a statement that's exclusively yours with our customizable options.</p>
     </div>
     <div className="Custom-Order-form">
        <form action="#">
            <div className="row">
            <div className="Custom_order-input  col-lg-6">
            <TextField id="name" label='NAME' variant="standard" type='name' required className='w-75'/>
            </div>
            <div className="Custom_order-input col-lg-6">
            <TextField id="email" label='EMAIL' variant="standard" type='email' required className='w-100'/>
            </div>
            </div>
            
            <div className="row ">
            <div className="Custom_order-input col-lg-3">
            <TextField id="country" label='COUNTRY' variant="standard" type='text' required className='w-75'/>
            <select name="country" id="">
                <option value="Choose a Country"></option>
                <option value="India">India</option>
            </select>
            </div>
            <div className="col-lg-3 Custom_order-input ">
            <TextField type="text" label='ISD CODE*' variant='standard' name='isdCode' id='isdCode'
             className='w-75'/>
            </div>
            <div className="col-lg-3 Custom_order-input ">
              <TextField  type="text" label='PHONE NO' variant='standard' name='phoneNo' id='phoneNo' required className='w-75'/>
            </div>
          <div className="col-lg-3 Custom_order-input ">
          <TextField type="text" label='JEWELLERY TYPE'
           variant='standard'
          name='jeweller-Type' 
          id='jeweller-Type'
          className='w-75'/>
          <select name="jeweller-Type-name" id="" className='select'>
                <option value="Select Type">Select Type</option>
            </select>
          </div>
           
            </div>
           
            <div className="Custom_order-input row">
            <div className="col-lg-12 p-0">
            <TextField type="text" 
            label='DESCRIPTION'
            name='Discription'
            id='Discription'
            variant='standard'
            className='w-100'/>
            </div>
            <p className='p-0 pt-2'>Please take a moment to write short description of the piece you would like us to create.</p>
            </div>
            <div className="Custom-order-option row ">
                <div className="col-lg-12 p-0 Custom-order-option-head">
                    <h2>LINK TO ITEM YOU LIKE (OPTIONAL)</h2>
                    <p>If you have seen something similar to what you like online, enter the URL of the web page below.</p>
                </div>

                <div className="Custom-order-option-input row">
                    <div className="col-lg-6 p-0 Custom-order-option-input-url">
                    <TextField  type="url" className='w-75' label="Paste your Link" variant='standard' placeholder='HTTP://WWW.EXAMPLE.COM' name='Custom-order-url' id='Custom-order-url'/>
                    </div>
                    <div className="col-lg-6 Custom-order-option-input-file-upload">
                       <div className="row">
                        <div className="col-lg-4">
                            <Input type="file" name='file'/>
                        </div>
                        <div className="col-lg-4">
                            <Input type="file" name='file'/>
                        </div>
                        <div className="col-lg-4">
                            <Input type="file" name='file'/>
                        </div>
                       </div>
                       
                    </div>
                    
                </div>
            </div>

            <div className="Custom-order-send-btn row">
                <div className="col-lg-12 p-0">
                <button>SEND REQUEST</button>
                </div>
            </div>
        </form>
     </div>
     </div>
    </section>
  </Fragment>
  )
}
