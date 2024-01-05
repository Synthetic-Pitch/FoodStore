import React from 'react'
import Mango from '../../Foods/Drinks/Mango smoothie.png'
import rasberry from '../../Foods/Drinks/rasberry mid wine.png'
const Drinks_3 = () => {
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
              <img className='ProductFinal_img' src={Mango} alt="burger" />
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
              <img className='ProductFinal_img' src={rasberry} alt="burger" />
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

export default Drinks_3
