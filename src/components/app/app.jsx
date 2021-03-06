import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/cart" exact>
        <CartPage/>
      </Route>
    </Switch>
  )
};

export default App;