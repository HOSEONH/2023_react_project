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
              src={require('../img/img3.jpg')}
              alt=''
              style={{ width: '100%', height: '100vh', backgroundSize: 'cover'}}
            />
          </div>
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

        </Slider>
      </div>
      <div className='boxwrap'>
        <div className='dd' data-aos='ade-down'></div>
          <div className='textBackground'>
            <h1 className='text'>Krispy<br/>Kreme</h1>
          </div>
        </div>
      <div>
        <h1 className='text1'>
          DELICIOUS<br />
          DOUGHNUTS,<br />
          NOW !
        </h1>
          <div className='bear-donut'></div>
          <div className='bear-donut2'></div>
          <div className='bear-donut3'></div>
      </div>
      <div data-aos='fade-down-right' className='image'></div>
      <div>
        <h1 className='text2'>
          From office meetings to<br />
          birthdays to baby showers.<br />
          Let us make your event<br />
          a little sweeter!</h1>
        <div data-aos='fade-down-left' className='image2'></div>
        <div data-aos='fade-down-right' className='image4'></div>
        <div data-aos='ade-down' className='yellow-donut'></div>
        <div data-aos='ade-down' className='pink-donut'></div>
      </div>
    </div>
  )
}
