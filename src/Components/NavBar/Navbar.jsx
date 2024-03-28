import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = ({Render}) => {
  
  const [display,setDisplay] = useState()

  useEffect(()=>{
    if(Render){
      setDisplay('navbar')
    }else setDisplay('none')
  },[Render])

  return (
    <div className={display}>
      
      <ul>
        <Link to={'/mainMenu'} className='link'>
          <li>Main menu</li>
        </Link>

        <Link to={'/desert'} className='link'>
         <li>Desert</li>
        </Link>
        <Link to={'/drinks'} className='link'>
         <li>Drinks</li>
        </Link>

        <Link to={'/cart'} className='link'>
         <li>Cart</li>
        </Link>

        <Link to={'/voucher'} className='link'>
          <li>Voucher</li>
        </Link>

        <Link className='link'>
          <li>About Us</li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Navbar
