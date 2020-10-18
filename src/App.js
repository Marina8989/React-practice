import React from 'react';
// import logo from './logo.svg';
import ShoppingCart from './ShoppingCart';
import items from './items';
import moreItems from './moreItems';

// import {add, multiply} from './helpers';
// import cats, { meow } from './cats'
import './App.css';

function App() {
  return (
    <div>
       <ShoppingCart items={ items } username="Carly"/>
       <ShoppingCart items={ moreItems } username="Rusty"/>
     </div>
  );
}

export default App;
