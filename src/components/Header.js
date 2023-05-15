import React, { useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { BsSuitHeart } from "react-icons/bs";
import Order from './Order';

const showOrders = (props) => {
   
   return (
      <div>
         {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
         ))}
      </div>
   )
}

const showNothing = () => {
   return (
      <div className='empty'>
         <h2>Ещё ничего не куплено</h2>
      </div>
   )
}

export default function Header(props) {
   let [cartOpen, setCartOpen] = useState(false)

let totalSum = 0;
props.orders.forEach(el => totalSum += el.price)
   
   return (
     
     <header>
        <div>
           <span className='logo'>QPICK</span>
           <ul className='nav'>
              <li><BsSuitHeart className='like'/></li>
              <li><IoMdCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen && 'active'}`} /></li>
           </ul>
           
           {cartOpen && (
              <div className='cart-open'>
                 {props.orders.length > 0 ?
                 showOrders(props) : showNothing()}
                 <div className='total'>
                    <span className='total-item'>Итого</span>
                    <span className='total-sum'>₽ {totalSum}</span>
                    <button className='buttonIss'>Перейти к оформлению</button>
                 </div>
              </div>              
           )}
            <h2 className='headerEar'>Наушники</h2>       
            <h2 className='headerAir'>Беспроводные наушники</h2>
         </div>
         
    </header>
  )
}
