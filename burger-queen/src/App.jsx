import React from 'react';
import PropTypes from 'prop-types';
import logo from './assets/title-burger-queen.svg';
import slogan from './assets/burger-queen-slogan.svg';
import waiter from './assets/waiter.svg';
import chef from './assets/chef-hat.svg';
import './App.css';

const ButtonInit = ({ value }) => (
  <button type="button" className="ButtonInit">
    { value }
  </button>
);

const CompOrders = () => (
  <div className="">
    <img src={waiter} className="comp-waiter" alt="waiter" />
    <ButtonInit value="Pedidos" />
  </div>
);

const CompKitchen = () => (
  <div className="">
    <img src={chef} className="comp-kitchen" alt="kitchen" />
    <ButtonInit value="Cocina" />
  </div>
);

const App = () => (
  <div className="App-background">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={slogan} className="App-slogan" alt="slogan" />
    </header>
    <main>
      <CompOrders />
      <CompKitchen />
    </main>
  </div>
);

ButtonInit.propTypes = {
  value: PropTypes.string.isRequired,
};

export default App;
