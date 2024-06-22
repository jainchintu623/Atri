import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HeaderSliderData } from './HeaderSliderData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };


const HeaderSlider = () => {
    const items = HeaderSliderData.map((item)=>
    // eslint-disable-next-line react/jsx-key
    <img src={item.image}  alt={item.image} className='Header-img'/>
                        )
return (
    <div className='Header-Slider'>
        <AliceCarousel
        mouseTracking
        items={items}
        // responsive={responsive}
        // controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>

);
}

export default HeaderSlider;