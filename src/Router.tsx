import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Wallets from './pages/Wallets';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Form from './pages/Form';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/wallets">
        <Wallets />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
