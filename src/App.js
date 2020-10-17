import React from 'react';
// import logo from './logo.svg';
import ShoppingCard from './ShoppingCart';
import items from './items';

// import {add, multiply} from './helpers';
// import cats, { meow } from './cats'
import './App.css';

function App() {
  return (
     <ShoppingCart items = { items } />
  );
}

export default App;
