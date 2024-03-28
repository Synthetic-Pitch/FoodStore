import React, { useEffect, useState } from 'react';
import { Mycontext } from '../../Context/Context';
import { useContext } from 'react';
import CartTrue from '../Cart-Design/Cart-True';
import '../Cart-Design/Cart.css'
import { useNavigate } from 'react-router-dom';
import CartFooter from '../Cart-Footer/CartFooter';

const Cart = () => { 

  const navigate = useNavigate()
  const { cart } = useContext(Mycontext);
  const [render,setRender] = useState(false)
  
  var length = cart.length === 0
  useEffect(()=>{
    if(!length){
      setRender(true)
    }
    if(length){
      setRender(false)
    }
  },[length])
 
  const addCart =()=>{
    navigate('/mainMenu')
  }
  
  return (
    <>
      <div className='header-text'>Your Food Cart</div>
      
      
      {render &&  
        <div className='map'>
          {cart.map((item, index) => {
            return <CartTrue key={index} name={item.name} price={item.price} id={item.id} image={item.image} />
          })}
       </div>
      }
      {render && <div onClick={addCart} className='add-more'>Add more</div>}
      
      {!render && 
        <div className='no-order-found'>
          <p>No item selected yet</p>
          <span onClick={addCart}>Add cart</span>
        </div>
      }

      <CartFooter/>
    </>
  );
}

export default Cart;