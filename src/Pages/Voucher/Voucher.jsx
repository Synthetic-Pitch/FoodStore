import React, { useState } from 'react';
import Header from '../Header/header';
import '../../CSS/Voucher.css';
import Voucher1 from '../../IMAGES/Screenshot 2023-07-13 190852.png';
import Voucher2 from '../../IMAGES/voucher1.png';
import Voucher3 from '../../IMAGES/Screenshot 2023-07-13 191020.png';
import Voucher4 from '../../IMAGES/Screenshot 2023-07-13 191045.png';

export let Count = 0;
export let add = 0;
export let Triggers = null;

export const Voucher = () => {
  const [Countclass,setCounclass] = useState(false)
  const [hiddenVouchers, setHiddenVouchers] = useState([false, false, false, false]);
  const [toggle, setToggle] = useState (false)
  
  function hideVoucher(index) {
    const updatedHiddenVouchers = [...hiddenVouchers];
    updatedHiddenVouchers[index] = true;
    setHiddenVouchers(updatedHiddenVouchers);
    
  }

  function CountClasser(){
    setCounclass(!Countclass) 
    Triggers = setCounclass
    console.log(Triggers)
  }
  
 function AddingCount(){
    add++;
    if(Count === 4){
      return
    }
    Count = add   
  }

  function toggles(){
    setToggle(!toggle)  
  }

  return (

    <div>
      <Header />
      <div id='Vr_1' className={hiddenVouchers[0] ? 'none' : 'Voucher_Div'}>
        <hr />
        <img className='voucher' src={Voucher1} alt="voucher" />
      </div>
      <button
        onClick={() => {
          AddingCount();
          hideVoucher(0);
          toggles()   
          CountClasser()     
        }}
        className={hiddenVouchers[0] ? 'none' : 'Claim_btn'}
      >
        Claim Voucher
      </button>

      <div id='Vr_2' className={hiddenVouchers[1] ? 'none' : 'Voucher_Div'}>
        <hr />
        <img className='voucher' src={Voucher2} alt="voucher" />
      </div>
      <button
        onClick={() => {
          AddingCount();
          hideVoucher(1);
          toggles()
          CountClasser()
        }}
        className={hiddenVouchers[1] ? 'none' : 'Claim_btn'}
      >
        Claim Voucher
      </button>

      <div id='Vr_3' className={hiddenVouchers[2] ? 'none' : 'Voucher_Div'}>
        <hr />
        <img className='voucher' src={Voucher3} alt="voucher" />
      </div>
      <button
        onClick={() => {
          AddingCount();
          hideVoucher(2);
          toggles()
          CountClasser()
        }}
        className={hiddenVouchers[2] ? 'none' : 'Claim_btn'}
      >
        Claim Voucher
      </button>

      <div id='Vr_4' className={hiddenVouchers[3] ? 'none' : 'Voucher_Div'}>
        <hr />
        <img className='voucher' src={Voucher4} alt="voucher" />
      </div>
      <button

        onClick={() => {
          AddingCount();
          hideVoucher(3);
          toggles()
          CountClasser()
        }}
        className={hiddenVouchers[3] ? 'none' : 'Claim_btn'}
      >
        Claim Voucher
      </button>
    </div>
  );
};

export default Voucher;