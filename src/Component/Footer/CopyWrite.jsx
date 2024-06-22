import React from 'react'

export default function CopyWrite() {
    const date = new Date();
    const CopyWrite = date.getFullYear()

  return (
    <div className='row m-0 copyWrite-Details'>
         <div className="col-lg-12 text-center p-3 ">
            <h2>Copyright &copy; {CopyWrite}, All rights reserved.</h2>
         </div>
    </div>
  )
}
