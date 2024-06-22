import React from 'react'

export default function Stories() {
  return (
    <section className='Stories-Section'>
        <div className="Stories-heading">
            <h1>OUR FASHION STORIES</h1>
        </div>
   <div className='row m-0'>
     <div className="col-lg-3 p-0">
        <div className="stories-images">
        <video width="475.5" height="240" controls autoPlay muted loop>
         <source src="\src\assets\Vdeos\WhatsApp Video 2024-05-06 at 22.34.32.mp4" type="video/mp4"/>
        </video>
        </div>
        <div className="stories-details">
            <p className='Stories-caption'>
            Jewelry is an art women have affinity for.
            </p>
            <h5 className='Stories-caption-date'>Jan. 2024</h5>
        </div>
     </div>

     <div className="col-lg-3 p-0">
        <div className="stories-images">
        <video width="475.5" height="240" controls autoPlay muted loop>
         <source src="\src\assets\Vdeos\WhatsApp Video 2024-05-06 at 22.54.38.mp4" type="video/mp4"/>
        </video>
        </div>
        <div className="stories-details">
            <p className='Stories-caption'>
            Jewelry is an art women have affinity for.
            </p>
            <h5 className='Stories-caption-date'>Jan. 2024</h5>
        </div>
     </div>

     <div className="col-lg-3 p-0">
        <div className="stories-images">
        <video width="475" height="240" controls autoPlay muted loop>
         <source  src="\src\assets\Vdeos\WhatsApp Video 2024-05-06 at 22.54.38 (1).mp4" type="video/mp4"/>
        </video>
        </div>
        <div className="stories-details">
            <p className='Stories-caption'>
            Jewelry is an art women have affinity for.
            </p>
            <h5 className='Stories-caption-date'>Jan. 2024</h5>
        </div>
     </div>

     <div className="col-lg-3 p-0">
        <div className="stories-images">
        <video width="475" height="240" controls autoPlay muted loop>
         <source src="\src\assets\Vdeos\WhatsApp Video 2024-05-06 at 22.54.39.mp4" type="video/mp4"/>
        </video>
        </div>
        <div className="stories-details">
            <p className='Stories-caption'>
            Jewelry is an art women have affinity for.
            </p>
            <h5 className='Stories-caption-date'>Jan. 2024</h5>
        </div>
     </div>
   </div>

    </section>
  )
}
