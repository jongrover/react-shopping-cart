import React from 'react';
import './CartItem.css';

function CartItem({item, updateQty}) {

  const addOne = () => {
    updateQty(item.id, item.qty + 1);
  };

  const subOne = () => {
    updateQty(item.id, item.qty - 1);
  };

  return (
    <li className="CartItem" id={"cart-item-"+item.id}>
      <span>Name: {item.name}</span>
      <span>Price: ${(item.price).toFixed(2)}</span>
      <span>Qty: <button onClick={subOne} disabled={item.qty <= 1}>-</button>
      {item.qty}
      <button onClick={addOne}>+</button></span>
      <span>Subtotal: ${(item.price * item.qty).toFixed(2)}</span>
    </li>
  );
}

export default CartItem;
