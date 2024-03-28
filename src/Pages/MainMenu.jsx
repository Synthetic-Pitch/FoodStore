import React from 'react'
import MainDish from '../Components/Main-Dish/MainDish'
import './CSS/Pages.css'
import Footer from '../Components/Footer/Footer'

const MainMenu = () => {
  return (
    <div className='main-menu'> 
     <MainDish/>
     <Footer/>
    </div>
  )
}

export default MainMenu