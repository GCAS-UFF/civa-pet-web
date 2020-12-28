import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Busca from './pages/Busca';
import Carteiras from './pages/Carteiras';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/search">
        <Busca />
      </Route>
      <Route path="/wallets">
        <Carteiras />
      </Route>
      <Route path="/profile">
        <Perfil />
      </Route>
      <Route path="/">
        <Inicio />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
