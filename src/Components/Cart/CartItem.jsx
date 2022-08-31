import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item-i'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary-i'>
          <span className='price-i'>{price}</span>
          <span className='amount-i'>x{props.amount}</span>
        </div>
      </div>
      <div className='actions-i'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;