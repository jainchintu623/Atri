import React, { Fragment } from 'react'
import { Link } from 'react-alice-carousel'

export default function Forgot() {
  return (
    <Fragment>
        <section className='Forgot-section'>
            <div className="row m-0 justify-content-center align-items-center" style={{height:"50vh"}}>
            <div className="col-lg-5">
              <div className="login-left-content">
              <div className="login-left-content-head">
              <h1>NEW TO ATRI</h1>
                <p>Become a member of ATRI’S exclusive family.</p>
              </div>
              </div>
              <div className="login-left-content-btn">
                <Link href='/signin' className='login-left-content-btn-register'>REGISTER</Link>
              </div>
        </div>
        <div className="col-lg-5">
        <div className="login-right-content-head">
          <h1>FORGOT PASSWORD</h1>
          </div>
          <div className="login-right-content-input">
            <input type="text" placeholder='EMAIL ADDRESS*'/>
          </div>
          <div className="login-right-content-btn">
            <button>RESET PASSWORD</button>
          </div>
          <div className="login-right-content-forgte-btn">
            <Link href='/login' className='login-right-content-forgte-button'>Log In</Link>
          </div>
        </div>
            </div>
        </section>
    </Fragment>
  )
}
