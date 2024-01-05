import React from 'react'
import Milktea from '../../Foods/Drinks/Milktea_1.png'
import Avocado from '../../Foods/Drinks/avocado smoohie.png'
import Header from '../Header/header'
import Drinks2 from './Drinks_2'
import Drinks3 from './Drinks_3'
const Drinks = () => {

  return (
    <div>
      <Header/>
      <div className='BaseLine'>

        <div className='Price_Div'>

          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_A'> 45</span>
            </div>
          </div>
          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_B'> 35</span>
            </div>
          </div>
        
        </div>

        <div className='Product_div '>

          <div className='Phase_1'>
            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Milktea} alt="burger" />
            </div>
            <div className='Name_Btn_Div'>
              <div className='Product_name_div'>
                <div className='Product_name'>Milktea</div>  
              </div>
              <div className='Btn_Div'>
                <button className='Btn'>Order now</button>
              </div>
            </div>
          </div>

          <div className='Phase_2'>

            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Avocado} alt="burger" />
            </div>
            <div className='Name_Btn_Div'>
              <div className='Product_name_div'>
                <div className='Product_name'>Avocado smoohie</div>  
              </div>
              <div className='Btn_Div'>
                <button className='Btn'>Order now</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Drinks2/>
      <Drinks3/>
    </div>
  )
}

export default Drinks
