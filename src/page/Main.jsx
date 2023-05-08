import React, { useEffect } from 'react'
import '../css/main.css'

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";

export default function Main()  {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
      offset: 200,
      delay: 0,
      once: true
    });
  }, []);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          <div>
            <img 
              src={require('../img/img2.jpg')}
              alt=''
              style={{ width: '100%', height: '100vh', backgroundSize: 'cover'}}
            />
          </div>
          <div>
            <img
              src={require('../img/img1.jpg')}
              alt=''
              style={{ width: '100%', height: '100vh', backgroundSize: 'cover'}}
            />
          </div>
          <div>
            <img
              src={require('../img/img3.jpg')}
              alt=''
              style={{ width: '100%', height: '100vh', backgroundSize: 'cover'}}
            />
          </div>

        </Slider>
        </div>
        <div className='boxwrap'>
          <div className='dd'></div>
          <div className='textBackground'>
          <h1>Krispy<br/>Kreme</h1>
        </div>
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
