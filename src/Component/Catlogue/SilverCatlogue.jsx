import React, { Fragment } from 'react'
import { CatlougeSilverData } from './CatlogueData'

export default function SilverCatlogue() {
  return (
    <Fragment>
        <section className='Silver-Catlogue-section'>
            <div className='silver-catlogue-card'>
                <div className="row m-0 silver-catlogue-card-details">
                    <div className="col-lg-8 text-center">
                        <div className="row m-0 justify-content-evenly">
                            {
                                CatlougeSilverData.map((item)=>(
                                    <a href={item.href} key={item.id} className="col-lg-2">
                                <div className="silver-catlogue-img">
                                    <img src={item.image} alt={item.image} />
                                </div>
                                <div className="silver-catlogue-img-details">
                                <h3>{item.name}</h3>
                                <a href={item.button}>{item.button}</a>
                                </div>
                            </a>
                                ))
                            }
                           
                           
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="row silver-catlogue-left-content">
                            
                        <div className="col-sm-2">
                        <div className="silver-catlogue-last-image-head">
                            <h2>SILVER JEWELLERY</h2>
                        </div>
                        </div>
                        <div className="col-sm-10 p-0">
                            <div className="silver-catlogue-last-image">
                            <img src="\src\assets\Catlogue\Silver-images\73409212c5d617c177480a217d61a71d.png" alt="" />
                        </div>
                        </div>
                        </div>
                    
                        

                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
