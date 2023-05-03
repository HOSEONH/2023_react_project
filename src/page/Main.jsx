import React, { useEffect } from 'react'
import '../css/main.css'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
      offset: 200,
      delay: 0,
      once: true
    });
  }, []);

  return (
    <div>
      <div className='headerImg'></div>
      <div className='dd'></div>
      <div className='textBackground'>
        <h1>Krispy<br/>Kreme</h1>
      </div>
      <div>
        <span></span>
        <h1 className='text'>DELICIOUS DOUGHNUTS, NOW DELIVERED</h1>
      </div>
      <div data-aos='fade-down-right' className='image'></div>
      <div>
        <h1 className='text1'>From office meetings to
          birthdays to baby showers. Let us make your event
          a little sweeter!</h1>
        <div data-aos='fade-down-left' className='image2'></div>
        <div className='image3 vibration'></div>
        <div data-aos='fade-down-right' className='image4'></div>
        <div className='image5'></div>
      </div>
    </div>
  )
}
