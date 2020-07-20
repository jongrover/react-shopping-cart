import React from 'react';
import Cart from './Cart';
import './App.css';

const initItems = [
  { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 1.99, qty: 3 },
  { id: 3, name: 'Sour Cream', price: 3.0, qty: 1 }
];

function App() {
  return (
    <div className="App">
      <Cart initItems={initItems} />
    </div>
  );
}

export default App;
