import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import PlaceAndViewOrders from './Components/Waiter-choice';
import DoOrders from './Components/Do-orders';
import Kitchen from './views/Kitchen';
import Deliver from './views/Deliver';
import Login from './views/Login';

const App = () => (
  <Router>
    <div className="">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orders">
          <PlaceAndViewOrders />
        </Route>
        <Route path="/orders-menu">
          <DoOrders />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
        <Route path="/deliver">
          <Deliver />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
