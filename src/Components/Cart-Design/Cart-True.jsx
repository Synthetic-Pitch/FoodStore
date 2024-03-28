import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { Mycontext } from '../../Context/Context';


const CartTrue = ({ name, price, image, id }) => {
  const { cart, setCart, total, setTotal } = useContext(Mycontext);
  const [quantity, setQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem(`quantity_${id}`);
    return storedQuantity ? parseInt(storedQuantity, 10) : 1;
  });
  const [itemPrice, setItemPrice] = useState(price);

  useEffect(() => {
    setItemPrice(quantity * price);
  }, [quantity, price]);

  const updateTotalAndStorage = (newQuantity) => {
    let credential = {
      name: name,
      quantity: newQuantity,
      price: price,
      id: id
    };
    
    const index = total.findIndex(item => item.id === id);
    const updatedTotal = [...total];

    if (index === -1) {
      updatedTotal.push(credential);
    } else {
      updatedTotal[index] = { ...updatedTotal[index], quantity: newQuantity };
    }

    setTotal(updatedTotal);
    localStorage.setItem(`quantity_${id}`, newQuantity);
  };

  const deleteItem = () => {
    const updatedCart = cart.filter(item => item.name !== name);
    setCart(updatedCart);
    setTotal(updatedCart);
  };

  const Addition = () => {
    if (quantity < 20) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateTotalAndStorage(newQuantity);
    }
  };

  const Subtraction = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateTotalAndStorage(newQuantity);
    }
  };

  return (
    <div className='order-container'>
      <div className='quantity'>
        <button onClick={Addition}>+</button>
        <span>{quantity}</span>
        <button onClick={Subtraction}>−</button>
      </div>

      <div className="image">
        <img src={image} alt="img" />
      </div>
      <div className="info">
        <div onClick={deleteItem}><button>X</button></div>
        <h3>{name}</h3>
        <span>&#8369;{itemPrice}</span>
      </div>
    </div>
  );
};

export default CartTrue;
