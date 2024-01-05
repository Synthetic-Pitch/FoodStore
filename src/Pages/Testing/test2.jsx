// test2.js

import React from 'react';
import '../../CSS/Test.css';
import Header from '../Header/header';
import Test1 from './test1';

let trigger = false

const Test2 = () => {
  const beep = "Mark"

  if(!trigger){
    console.log(beep)
    trigger = true
  }
  
  
  return (
    
    <div>
      
      <Header/>
      <Test1 callback={beep}/>
    
    </div>

  );
};

export default Test2;