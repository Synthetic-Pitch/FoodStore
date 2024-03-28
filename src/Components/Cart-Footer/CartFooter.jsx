import React, { useEffect, useState } from 'react';
import './CartFooter.css';
import { Mycontext } from '../../Context/Context';
import { useContext } from 'react';

const CartFooter = ({ price }) => {
  const { total } = useContext(Mycontext);
  const [TotalAmount,setTotalAmount] = useState()

  useEffect(()=>{
    const amount = total.map((item)=>({
      id:item.id,
      amount: item.price * item.quantity
    }))
    const Amount = total.reduce((total,product)=>total + product.price,0)
    setTotalAmount(Amount)
    console.log(Amount)
  },[total])
 

  return (
    <div className='cart-footer'>
      
      <div>
        {TotalAmount}
      </div>

      <button >RENDER</button>
      
    </div>
  );
};

export default CartFooter;
