import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
import underline from '../../assets/nav_underline.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer_logo} alt="" /> */}
                <h1 className="logo"><b>Maaz<span>.dev</span></b> <img src={underline} /></h1>
                <p>I am a frontend developer from Charsadda, Pakistan with 4+ years of experience in transforming complex Figma designs into pixel-perfect React code. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2026 Maaz Jan &bull; All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of services &bull;</p>
                <p>Privacy Policy &bull;</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer