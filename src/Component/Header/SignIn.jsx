import React, { Fragment, useEffect } from 'react'
import './Css/SignIn.css'
import { Link } from 'react-alice-carousel'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, register } from '../../../State/Auth/Action'
import { store } from '../../../State/Store'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
   const dispatch=useDispatch()
  const navigate = useNavigate();
   const jwt =localStorage.getItem("jwt")
   const {auth}=useSelector(store=>store)
   useEffect(()=>{
     if(jwt)
      {
         dispatch(getUserProfile(jwt)) 
         navigate('/')
      }
   },[jwt,auth.jwt,dispatch])

 

  const handleSubmit = (event) => {
   event.preventDefault();

   const data = new FormData(event.currentTarget);
   const userData ={
       FirstName:data.get("FirstName"),
       LastName:data.get("LastName"),
       Email:data.get("Email"),
       PhoneNo:data.get("PhoneNo"),
       Password:data.get("Password"),
       ConfirmPassword:data.get("ConfirmPassword")
   }
    dispatch(register(userData))
   console.log(dispatch(register(userData)))
 };
  return (
    <Fragment>
        <section className='Sign-In-Section'>
          <div className='Sign-In-Content'>
             <div className="Sing-In-Head">
                <h1>SIGN UP</h1>
             </div>
             <form onSubmit={handleSubmit}>
             <div className="row m-0 text-center">
                <div className="col-lg-6">
                   <div className="Sign-up-input-details">
                    <TextField type="text" className='Sign-up-name-input Sign-up-input' name='FirstName' id='FirstName' variant='standard' label='FIRST NAME*'/>
                   </div>
                   <div className="Sign-up-input-details">
                    <TextField type="email" className='Sign-up-email- Sign-up-input' name='Email' id='Email' variant='standard' label='EMAIL*'/>
                   </div>
                   <div className="Sign-up-input-details">
                    <TextField type="password" className='Sign-up-password-input Sign-up-input' name='Password' id='Password' variant='standard' label='PASSWORD*'/>
                   </div>
                   
                </div>
                

                <div className="col-lg-6">
                   <div className="Sign-up-input-details">
                    <TextField type="text" className='Sign-up-Lastname-input Sign-up-input' name='LastName' id='LastName' variant='standard' label='LAST NAME*'/>
                   </div>
                   <div className="Sign-up-input-details">
                    <TextField type="text" className='Sign-up-phoneNo-input Sign-up-input' name='PhoneNo' id='PhoneNo' variant='standard' label='PHONE NO*'/>
                   </div>
                   <div className="Sign-up-input-details">
                    <TextField type="password" className='Sign-up-confirmpassword-input Sign-up-input' name='confirmPassword' id='confirmPassword' variant='standard' label='CONFIRM PASSWORD*'/>
                   </div>
                </div>
                <div className="login-right-content-btn">
            <button >REGISTER</button>
          </div>
             </div>
             </form>
             <div className="Sign-up-input-condition d-flex">
                <div className='Sign-up-input-condition-chekbox'>
                <input type="checkbox" checked/>
                </div>
               <div className='Sign-up-input-condition-content'>
               <p>I have read and agreed to the ATRI’S terms & conditions.</p>
               </div>
             </div>
             <div className="register-Login-btn">
                <div className="hr-line d-flex justify-content-center align-items-center">
                    <hr />
                    <h4>OR</h4>
                    <hr />
                </div>
             <div className="login-left-content-head">
              <h1 className='text-center pt-4 pb-4'>NEW TO ATRI</h1>
              </div>
             <div className="login-right-content-btn">
            <Link href='/login' className='login-right-content-btn-login'>LOG IN</Link>
          </div>
             </div>
          </div>
        </section>
    </Fragment>
  )
}
