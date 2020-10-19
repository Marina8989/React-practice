import React from 'react';
// import logo from './logo.svg';
import fakeLogo from './fakeLogo.svg';
import ShoppingCart from './ShoppingCart';
import items from './items';
import moreItems from './moreItems';
import Alert from './Alert'

// import {add, multiply} from './helpers';
// import cats, { meow } from './cats'
import './App.css';

function App() {

  return (
    <div>
       <Alert variant = 'success' >
          <h1>Welcome back!</h1>
       </Alert>
       <Alert variant = 'danger' >
          <h2>Stop!!</h2>
       </Alert>
       <img src={fakeLogo} id="logo" alt="" />
       <ShoppingCart items={ items } username="Carly"/>
       <ShoppingCart items={ moreItems } username="Rusty"/>
     </div>
  );
}

export default App;
