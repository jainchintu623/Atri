import React from 'react'
import HeaderSlider from '../Slider/HeaderSlider'
import Personalised from '../Shop Personalised/Personalised'
import Catlogue from '../Catlogue/Catlogue'
import SilverCatlogue from '../Catlogue/SilverCatlogue'
import Stories from '../OUR FASHION STORIES/Stories'

export default function Home() {
  return (
    <div>

 <HeaderSlider/>
  <Personalised/>
   <Catlogue/>
   <SilverCatlogue/>
   <Stories/>
  
    </div>
  )
}
