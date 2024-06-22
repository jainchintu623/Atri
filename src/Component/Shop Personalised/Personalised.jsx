import React from 'react'
import { Link } from 'react-router-dom'

export default function Personalised() {
  
  return (
    <section className='Shop-personalised'>
        <div className="row m-0">
             <div className="col-lg-12 text-center Personalised-heading">
                <h1>Shop Personalised</h1>
             </div>
        </div>
         <div className="row m-0">
            <div className="col-lg-4 p-0  shop-card">
                <div className="Shop-personalised-images">
                     <img src="\src\assets\Shop Personalised\6e7c227d3370966c21c0369e78899342.png" alt="" />
                     <div className="Shop-personalised-images-details ">
                     <h3>NECKLACES</h3>
                     <Link to ="/nacklaces">SHOP NOW</Link>
                </div>
                </div>
               
            </div>
            
            <div className="col-lg-4 p-0  shop-card">
                <div className="Shop-personalised-images">
                     <img src="\src\assets\Shop Personalised\sec-2.png" alt="" />
                     <div className="Shop-personalised-images-details">
                     <h3>EARRINGS</h3>
                     <a href = "/" >SHOP NOW</a>
                </div>
                </div>
               
            </div>
           
           
            <div className="col-lg-4 p-0 shop-card">
                <div className="Shop-personalised-images">
                     <img src="\src\assets\Shop Personalised\third-3.png" alt="" />
                
                     <div className="Shop-personalised-images-details">
                     <h3>BRACELATES</h3>
                     <a href = "/" >SHOP NOW</a>
                </div></div>
                
            </div>
           
         </div>
    </section>
  )
}
