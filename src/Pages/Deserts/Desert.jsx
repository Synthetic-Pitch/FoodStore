import React from 'react'
import Header from '../Header/header'
import Chocorio from '../../Foods/Desert/Ultimate chocorio.png'
import Freakshake from '../../Foods/Desert/Freakshake.png'
import Desert2 from './Desert_2'
import Desert3 from './Desert_3'

const Desert = () => {
  return (
    <div>
      <Header/>
      <div>
     
      <div className='BaseLine'>

        <div className='Price_Div'>

          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_A'> 76</span>
            </div>
          </div>
          <div className='PesoSign'> 
            <div className='PesoSign_1'> &#x20B1; 
              <span className='Price_B'> 92</span>
            </div>
          </div>
        
        </div>

        <div className='Product_div '>

          <div className='Phase_1'>
            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Chocorio} alt="burger" />
            </div>
            <div className='Name_Btn_Div'>
              <div className='Product_name_div'>
                <div className='Product_name'>Ultimate Chocorio</div>  
              </div>
              <div className='Btn_Div'>
                <button className='Btn'>Order now</button>
              </div>
            </div>
          </div>

          <div className='Phase_2'>

            <div className='Product_Image'>
              <img className='ProductFinal_img' src={Freakshake} alt="burger" />
            </div>
            <div className='Name_Btn_Div'>
              <div className='Product_name_div'>
                <div className='Product_name'>Freakshake</div>  
              </div>
              <div className='Btn_Div'>
                <button className='Btn'>Order now</button>
              </div>
            </div>

          </div>
        </div>
      </div>
     </div>
    <Desert2/>
    <Desert3/>
    </div>
    
  )
}

export default Desert
