import React from 'react'
import { CatlougeData } from './CatlogueData'

export default function Catlogue() {
  return (
    <section className='Catlogue-section'>
        <div className="row m-0">
             <div className="col-lg-12 text-center Catlogue-heading">
                <h1>Catlogue</h1>
             </div>
             <div className='Catlogue'>
                  <div className="row">
                    <div className="col-lg-5 p-0">
                        <div className="row catlogue-left-content">
                            <div className="col-sm-10">
                            <div className="catlogue-first-image">
                            <img src="\src\assets\Catlogue\first-1.png" alt="" />
                        </div>
                        </div>
                        <div className="col-lg-2 ">
                        <div className="catlogue-first-image-head">
                            <h2>BEADS JEWELLERY</h2>
                        </div>
                        </div>
                            
                        </div>
                        
                    </div>
                    <div className="col-lg-7">
                    <div className="row Catlogue-card">
                   
                        {
                            CatlougeData.map((item)=>(
                           
                               <a href={item.href} key={item.id} className='col-lg-3 Catlogue-card-details'>
                                <div className="catlogue-product-imgages">
                                <img src={item.image} alt={item.image} />
                            </div>
                            <div className="catlogue-product-imgages-deatils">
                                <h3>{item.name}</h3>
                                <a href={item.href}>{item.button}</a>
                            </div>
                               </a>
                            ))
                        }
                        </div>
                         
                        
                    </div>
                  </div>
                  </div>
                  </div>
    </section>
  )
}
