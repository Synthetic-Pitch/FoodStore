import React, { useState } from 'react';
import '../../CSS/Header.css';
import Menu_icon from '../../ICONS/menu-icon.png';
import Search_icon from '../../ICONS/icons8-search-64.png';
import Profile_icon from '../../ICONS/account.png';
import { Link } from 'react-router-dom';
import { Count } from '../Voucher/Voucher';



const Header = () => {

  const [Invisible, Appear] = useState(false);

  function Setter() {
    Appear(!Invisible);
  }
  
  return (

    <div className='header'>
      <img onClick={Setter} className='Menu_icon' src={Menu_icon} alt='menu-icon' />
          
      <div className='search_bar'>
        <div className='sr_si'>
          <img className='sr_search_icon' src={Search_icon} alt='search_icon' />
        </div>
        <div className='sr_in'>
          <input className='input_search_bar' />
        </div>
      </div>
      
      <img className='profile_icon' src={Profile_icon} alt='profile' />

      <span className='Count'><span className='Counter'>{Count}</span></span>
      
      <div className={`${!Invisible ? 'none' : 'slider'}`}>

        <p className='slider_text'>
          <Link className='slider_text' to="/MainMenu">Main Menu</Link>
        </p>
        <p className='slider_text'>
          <Link className='slider_text' to="/drinks">Drinks</Link>
        </p>
        <p className='slider_text'>
          <Link className='slider_text' to="/desert">Desert</Link>
        </p>
        <p className='slider_text'>
          Appetizer
        </p>
        <p className='slider_text'>
          <Link className='slider_text' to="/voucher">Voucher</Link>
        </p>
        <p className='slider_text'>
          About-us
        </p>
        <p className='slider_text'>
          <Link className='slider_text' to="/test_1">Test 1</Link>
        </p>
        <p className='slider_text'>
          <Link className='slider_text' to="/test_2">Test 2</Link>
        </p>
      </div>     

    </div>
  );
};

export default Header;
