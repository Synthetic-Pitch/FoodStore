// MainDish.js
import React from 'react';
import './MainDish.css';
import mainDish from '../Data'; // Assuming you have a data file named 'Data.js'

import Foods from '../Foods/Foods';

const MainDish = () => {
  return (
    <>
      <div className='main-dish'>
        {mainDish.map((object, i) => (
        <Foods  key={i} index={i} id={object.id} name={object.name} image={object.image} price={object.price} />
        ))}
      </div>
    </>
  );
};

export default MainDish;
