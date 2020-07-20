import React, {useState, useEffect} from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({initItems}) {

  const initState = JSON.parse(window.localStorage.getItem('items'));
  // check if localStorage is holding anything otherwise use initial state from App.js
  const [items, setItems] = useState(initState || initItems);

  // update localStorage whenever items state has changed
  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const updateQty = (id, newQty) => {
    const newItems = [...items]; // best practice to not mutate the original so make a copy
    newItems[id-1].qty = newQty;
    setItems(newItems);
  };

  const total = items.reduce( (sum, item) => {
    return sum + item.price * item.qty;
  }, 0).toFixed(2);

  return (
    <div className="Cart">
      <h1>Shopping Cart</h1>
      <ul>
        {items.map(item => (
          <CartItem key={item.id} item={item} updateQty={updateQty} />
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
