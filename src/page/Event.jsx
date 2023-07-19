import React, { useEffect, useRef } from 'react'
import '../css/event.css'
import { Link } from 'react-router-dom';

export default function Event() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div style={{paddingTop:"100px"}}>
      <div>
        <video ref={videoRef} style={{width:"800px", height:"800px"}} autoplay loop>
          <source src={require("../img/벨리곰.mp4")} type="video/mp4" />
        </video>
      </div>
      <div>
        <ul>
          <li>
            <Link to={`/event-list`}>
              <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/343560953_137420739211217_460441407700056074_n.png?stp=dst-png_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=AqESkx3QxFYAX_89P8d&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAiGqj9V8gx6O1K_YE4CSDb_oUGKw5F27fM3WFKM3lR-A&oe=64B45B67" alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/event-list`}>
              <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/342511829_1296508667954504_6663458311298660944_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=JFS9amkomukAX8FwhxB&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBcCrB_J3NSrshMwFkxSJUOQ7beffI828HFxlvnM84S6Q&oe=64B5A6C5" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
