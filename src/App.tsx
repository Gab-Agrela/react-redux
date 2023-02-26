import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './Pages/Login';
import Wallet from './Pages/Wallet';

function App() {
  return (
    <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/wallet">
          <Wallet />
        </Route>
    </Switch>
  )
}

export default App;
