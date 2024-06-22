// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import '../Header/Css/Dailog.css'; 

import { Link } from 'react-alice-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/Store'
import { getUserProfile, logout } from '../../../State/Auth/Action';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
export default function Header() {
  const { auth } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  
  const searchIconClick = () => {
    setSearchOpen(true); 
  };
  
  const searchCloseDialog = () => {
    setSearchOpen(false);
  }

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt))
    }
  }, [jwt, auth.jwt, dispatch])

  const handleLogout=()=>{
    dispatch(logout())
    navigate('/')
    handleCloseDialog()
  }

  return (
    <div>
      <header>
        <div className='header'>
          <div className="row m-0 header-details">
            <div className="col-lg-4">
              <div className='search-bar'>
                <div className="search-bar-icon" onClick={searchIconClick}>
                  <IonIcon name="search" className="search" />
                </div>
                {searchOpen && (
                  <div className="search-bar-dialog ">
                    <div className="close-btn" onClick={searchCloseDialog}>×</div>
                    <div className="search-bar-input-content">
                      <div className='search-bar-input d-flex justify-content-center align-items-center'>
                        <input type="search" name='search' id='search' placeholder='search...'  />
                        <IonIcon name="search" className="dailog-search-icon" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-4">
              <div className="logo">
                <div className="logo-img">
                  <img src="/src/assets/Logo/Logo.png" alt="Logo" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="add-bag">
                <div className="add-bag-icon">
                  <IonIcon  name="bag-outline" className='bag-outline'/>
                </div>
                <div>
                  {auth.user?.FirstName? (
                    <div className="profile " onClick={handleIconClick}>
                      <Avatar style={{color:"black" ,cursor:"pointer"}} className='font-semibold'>{auth.user?.FirstName[0].toUpperCase()} </Avatar>
                    </div>
                  ) : (
                    <div className="profile" onClick={handleIconClick}>
                      <IonIcon name="person-circle-outline" className="bag-outline pt-1.5" />
                    </div>
                  )}
                  {isOpen && (
                    <div className="dialog-container ">
                      <div className="dialog">
                        <div className="close-btn close-btn-login-dialog" onClick={handleCloseDialog}>×</div>
                        {auth.user?.FirstName? ( 
                          <div>
                            <h3 className='font-semibold' style={{fontSize:"1.6rem"}}>Welcome, {auth.user?.FirstName}</h3>
                            <div className='pt-2 pb-1'><Link className='font-bold pointer-event' href="profile">Profile</Link></div>
                            <div className='pt-2 pb-1'><Link className='font-bold pointer-event' href="/account/order">My Order</Link></div>
                            <div className='cursor-pointer pt-2'><Link to="/" onClick={handleLogout} className='font-bold pointer-event'>Logout</Link></div>
                          </div>
                        ) : (
                          <div className="tabs">
                            <div className="tabs-content">
                              <h3>YOUR ACCOUNT</h3>
                              <p>Access account & manage your orders.</p>
                            </div>
                            <div className="tab-content-btn d-flex justify-content-around pt-3">
                              <Link href="login" className='tab-content-btn-login'>LOG IN</Link>
                              <Link href="signIn" className='tab-content-btn-signin'>SIGN UP</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>  
    </div>
  )
}
