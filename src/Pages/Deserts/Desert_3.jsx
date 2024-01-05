import React from 'react'
import Fruities from '../../Foods/Desert/Fruities.png'
import BanaaChips from '../../Foods/Desert/Banana Chips.png'

const Desert_3 = () => {
  return (
    <div>

      <div>
     
        <div className='BaseLine'>

          <div className='Price_Div'>

            <div className='PesoSign'> 
              <div className='PesoSign_1'> &#x20B1; 
                <span className='Price_A'> 32</span>
              </div>
            </div>
            <div className='PesoSign'> 
              <div className='PesoSign_1'> &#x20B1; 
                <span className='Price_B'> 55</span>
              </div>
            </div>
          
          </div>

          <div className='Product_div '>

            <div className='Phase_1'>
              <div className='Product_Image'>
                <img className='ProductFinal_img' src={Fruities} alt="burger" />
              </div>
              <div className='Name_Btn_Div'>
                <div className='Product_name_div'>
                  <div className='Product_name'>Fruities</div>  
                </div>
                <div className='Btn_Div'>
                  <button className='Btn'>Order now</button>
                </div>
              </div>
            </div>

            <div className='Phase_2'>

              <div className='Product_Image'>
                <img className='ProductFinal_img' src={BanaaChips} alt="burger" />
              </div>
              <div className='Name_Btn_Div'>
                <div className='Product_name_div'>
                  <div className='Product_name'>Banan Chips</div>  
                </div>
                <div className='Btn_Div'>
                  <button className='Btn'>Order now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desert_3
