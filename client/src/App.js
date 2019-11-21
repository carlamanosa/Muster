/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import WishList from './Pages/WishList';
import Cart from '../src/Pages/Cart';
import Search from "../src/Components/Search";
import NavSearch from "./Components/NavSearch";
import { InputProvider } from "../src/Utils/GlobalState";




function App() {

  return (
    <InputProvider>
    <BrowserRouter>
      <NavSearch />
      <Route exact path="/" component={Home} />
      <Route exact path="/lovelist" component={WishList} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/search/:searchTerm" component={Search} />
    </BrowserRouter>
    </InputProvider>

  );
}

export default App;
