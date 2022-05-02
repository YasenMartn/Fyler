import React from 'react';
import { Call, Email, Facebook, Instagram, LocationOn, Twitter } from '@mui/icons-material';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
          <div className="logoContainer">
            <Image src="/pictures/logo.png" width="50px" height="50px" alt="image" />
            <span className="logoName">Fyler</span>
          </div>
      </div>

      <div className="bottom">

          <div className="locationContainer">
            <LocationOn/>
            <span className="locInfo">
              Fyler is a file storage website developed by Yassin Laghzaouna. Check him out at yassinlaghzaouna.netlify.app
            </span>
          </div>

          <div className="callingContainer">
            <div className="callContainer">
              <Call/>
              <span className="text">+1-543-123-4567</span>
            </div>
            <div className="callContainer">
              <Email/>
              <span className="text">example@fyler.com</span>
            </div>
          </div>

          <div className="linkContainer">
              <div className="half">
                <span className="link">About Us</span>
                <span className="link">Jobs</span>
                <span className="link">Press</span>
                <span className="link">Blog</span>
              </div>
              <div className="half" >
                <span className="link">Contact Us</span>
                <span className="link">Terms</span>
                <span className="link">Privacy</span>
              </div>
              
              
          </div>


          <div className="socialsContainer">
              <div className="iconContainer">
                <Facebook className='icon'/>
              </div>
              <div className="iconContainer">
                <Twitter className='icon'/>
              </div>
              <div className="iconContainer">
                <Instagram className='icon'/>
              </div>
          </div>
      </div>
     

    </div>
  )
}

export default Footer