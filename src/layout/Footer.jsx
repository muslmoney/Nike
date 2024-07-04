import React from 'react'
import './layout.css'
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
      <footer className='Footer'>
  <div className='container '>
            <div className='footer__wrap'>
            <div className='footer__card' >
                <h4>Resourses</h4>
                <a href="/products"><p className='opacity'>Find a store</p></a>
                <a href="#"><p className='opacity'>Nike Journal</p></a>
                <a href="/products"><p className='opacity'>Promo Codes</p></a>
                <a href="#"><p className='opacity'>Feedback</p></a>
            </div>
            <div className='footer__card'> 
                <h4>Help</h4>
                <a href="#"><p className='opacity'>Get Help</p></a>
                <a href="#"><p className='opacity'>Order Status</p></a>
                <a href="#"><p className='opacity'>Returns</p></a>
                <a href="#"><p className='opacity'>Payment options</p></a></div>
            <div className='footer__card'> 
                <h4>Company</h4>
                <a href="#"><p className='opacity'>About Nike</p></a>
                <a href="#"><p className='opacity'>News</p></a>
                <a href="#"><p className='opacity'>Careers</p></a>
                <a href="#"><p className='opacity'>Pupose</p></a>
                </div>
           <div className='footer__icons'>
                <h3>We on Social Media</h3>
           <div className="icons ">
                <a target='_blank' href="https://www.facebook.com/nike/?locale=ru_RU">
                    <div className="layer "  >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-facebook-f"><TiSocialFacebook /></span>
                    </div>
                    <div className="text">
                        Facebook</div>
                </a>
                <a target='_blank' href="https://twitter.com/Nike?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-twitter"><BsTwitterX /></span>
                    </div>
                    <div className="text">
                        X</div>
                </a>
                <a target='_blank' href="https://www.instagram.com/nike/">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-instagram "><FaInstagram /></span>
                    </div>
                    <div className="text">
                        Instagram</div>
                </a>

                <a target='_blank' href="https://www.youtube.com/user/NIKE">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-youtube"><FaYoutube /></span>
                    </div>
                    <div className="text">
                        YouTube</div>
                </a>
            </div>
           </div>
            </div>
            <p className='opacity nuke'>© 2024 Nike, Inc. All rights reserved</p>
        </div>
      </footer>
    )
}

export default Footer
