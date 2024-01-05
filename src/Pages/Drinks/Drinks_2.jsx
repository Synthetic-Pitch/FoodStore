import React from 'react'
import Blue_Muffin_Smoothie from '../../Foods/Drinks/Blueberry muffin smoothie.png'
import Melon_Smoothie from '../../Foods/Drinks/Menon smoothie.png'

const Drinks_2 = () => {
  return (
    <div>
      
      <div className='BaseLine'>

        <div className='Price_Div'>

          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_A'> 48</span>
            </div>
          </div>
          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_B'> 30</span>
            </div>
          </div>
        
        </div>

        <div className='Product_div '>

          <div className='Phase_1'>
            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Blue_Muffin_Smoothie} alt="burger" />
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
              <img className='ProductFinal_img' src={Melon_Smoothie} alt="burger" />
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
    </div>
  )
}

export default Drinks_2
