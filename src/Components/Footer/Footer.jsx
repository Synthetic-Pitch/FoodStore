import React from 'react'
import './Footer.css'
import fb from '../../ASSET/webIcons/facebook.png'
import ig from '../../ASSET/webIcons/instagram.png'
import twitter from '../../ASSET/webIcons/twitter.png'
const Footer = () => {
  return (
    <div className='footer'>
      
      <ul className='branches'>
        <li className='first-li'>BRANCHES</li>
        <li>Taguig BGC</li>
        <li>Makati</li>
        <li>Robinson Ayala</li>
        <li>SM north</li>
        <li>Sm Cavite</li>
      </ul>
      
      <div className='context-icons'>
        <ul className="icons">
          <li><img src={fb} alt="s" /></li>
          <li><img src={ig} alt="d" /></li>
          <li><img src={twitter} alt="f" /></li>
        </ul>

        <h2>Copyright &copy; 2024 All right reserved || Design by Mark</h2>
      </div>

    </div>
  )
}

export default Footer
