import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Inicio, Busca, Carteiras, Perfil } from './pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/busca">
        <Busca />
      </Route>
      <Route path="/carteiras/">
        <Carteiras />
      </Route>
      <Route path="/perfil">
        <Perfil />
      </Route>
      <Route path="/">
        <Inicio />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
