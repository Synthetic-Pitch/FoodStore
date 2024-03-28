import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mycontext } from './Context/Context'
import { useState } from 'react';

import LoginSignupPage from './Pages/LoginSignup-Page';
import MainMenu from './Pages/MainMenu';
import Cart from './Pages/Cart';
import Voucher from './Pages/Voucher';
import Drinks from './Pages/Drinks';
import Desert from './Pages/Desert';
import Header from './Components/Header/Header'

function App() {

  const [checker,setchecker] = useState('reymark')
  let [cart,setCart] =useState ([]) //This is an array of cart
  const [total,setTotal] =useState([]) 
  

  return (
    
    <div className="App">
      
      <Mycontext.Provider value={{setchecker,checker,cart,setCart,total,setTotal}}>
        
        <BrowserRouter>

          <Header/>
          <Routes>
            
            <Route index element={<LoginSignupPage />} />
            <Route path='/mainMenu' element={<MainMenu/>}/>
            <Route path='/desert' element={<Desert/>}/>
            <Route path='/drinks' element={<Drinks/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/voucher' element={<Voucher/>}/>  
                           
          </Routes>

        </BrowserRouter>
      </Mycontext.Provider>
        
    
    </div>
  );
}

export default App;
