import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Component/Header/Header'
import NavBar from '../Component/Header/Navbar'
import Footer from '../Component/Footer/Footer'
import Home from '../Component/Home/Home'
import Login from '../Component/Header/Login'
import SignIn from '../Component/Header/SignIn'
import About from '../Component/About/About'
import CustomOrder from '../Component/Custom Order/CustomOrder'
import Forgot from '../Component/Header/Forgot'
import ProductDetails from '../Component/ProductDetails/ProductDetails'
import Cart from '../Component/Cart/Cart'
import ChekOut from '../Component/Chekout/ChekOut'
import Order from '../Component/OrderPage/Order'
import OrderDetails from '../Component/OrderPage/OrderDetails'
import AllProdcuts from '../Component/Products/AllProducts'

const UserRouting = () => {
  return (
    <div>
        <div>
        <Header/>
        <NavBar/>
        </div>
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>

       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/customorder' element={<CustomOrder/>}></Route>
        {/* <Route path='/nacklaces' element={<NecklaceJewelrySection/>}></Route> */}
                <Route path='/allproducts' element={<AllProdcuts/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/ChekOut' element={<ChekOut/>}></Route>
        <Route path='/allProducts/:productId' element={<ProductDetails/>}></Route>
       <Route path='/ChekOut' element={<ChekOut/>}></Route>
       <Route path='/account/order' element={<Order/>}></Route>
       <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>   
        </Routes>

        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default UserRouting;