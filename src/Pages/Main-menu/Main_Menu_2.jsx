import React from 'react'
import '../../CSS/Main-menu.css'
import Pizza from '../../Foods/Main-Menu/BbQ Pizza.png'
import Crab from '../../Foods/Main-Menu/roasted crabs.png'

const Main_Menu_2 = () => {
  return (
    
    <div>
      <div className='BaseLine'>

        <div className='Price_Div'>

          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_A'> 95</span>
            </div>
          </div>
          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_B'> 112</span>
            </div>
          </div>
        
        </div>
        
        <div className='Product_div '>

          <div className='Phase_1'>
            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Pizza} alt="burger" />
            </div>
            <div className='Name_Btn_Div'>
              <div className='Product_name_div'>
                <div className='Product_name'>BbQ Pizza</div>  
              </div>
              <div className='Btn_Div'>
                <button className='Btn'>Order now</button>
              </div>
            </div>
          </div>

          <div className='Phase_2'>

            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Crab} alt="burger" />
            </div>
            <div className='Name_Btn_Div'>
              <div className='Product_name_div'>
                <div className='Product_name'>Grilled Grab</div>  
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

export default Main_Menu_2
