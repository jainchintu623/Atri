import React, { Fragment, useState } from 'react'
import { Link } from 'react-alice-carousel'
import  './Css/login.css'
import { IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { login } from '../../../State/Auth/Action';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
    if (!password) {
      alert('Please enter your password');
      return;
    }

    const userData = {
      Email: email,
      Password: password
    }
    dispatch(login(userData))
    console.log("userdata", userData)
    navigate('/Home');
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <section className='Login-section'>
        <div className="row m-0 justify-content-center">
          <div className="col-lg-5">
            <div className="login-left-content">
              <div className="login-left-content-head">
                <h1>NEW TO ATRI</h1>
                <p className='pt-2'>Become a member of ATRI’S exclusive family.</p>
              </div>
            </div>
            <div className="login-left-content-btn">
              <Link href='/signIn' className='login-left-content-btn-register'>REGISTER</Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="login-right-content-head">
              <h1>SIGN IN</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="login-right-content-input">

                <TextField
                  required
                  id="Email"
                  name="Email"
                  variant='standard'
                  label="EMAIL ADDRESS"
                  fullWidth
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-right-content-input">
                <FormControl className='w-100' variant="standard">
                  <InputLabel htmlFor="standard-adornment-password" >PASSWORD*</InputLabel>
                  <Input
                    required
                    id="standard-adornment-password"
                    name='Password'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="login-right-content-btn">
                <button type="submit">LOG IN</button>
              </div>
            </form>
            <div className="login-right-content-forgte-btn">
              <Link href='/forgot' className='login-right-content-forgte-button'>Forgot Password ?</Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
