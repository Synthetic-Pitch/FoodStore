import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
import Drinks from './Pages/Drinks/Drinks'
import Desert from './Pages/Deserts/Desert'
import Voucher from './Pages/Voucher/Voucher';
import Test1 from './Pages/Testing/test1'
import Test2 from './Pages/Testing/test2';
import './CSS/App.css';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/drinks' element={<Drinks/>}/>
          <Route path='/MainMenu' element={<Main/>}/>
          <Route path='/desert' element={<Desert/>}/>
          <Route path='/voucher' element={<Voucher/>}/>
          <Route path='/test_1' element={<Test1/>}/>
          <Route path='/test_2' element={<Test2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App; 
