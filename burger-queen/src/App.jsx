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
const ContainerButton = () => (
  <div className="container-button">Hola!</div>
);
const CompButtonOrders = () => (
  <div className="container-button">
    <img src={waiter} className="comp-waiter" alt="waiter" />
    <ButtonInit value="Pedidos" />
  </div>
);
const CompButtonKitchen = () => (
  <div className="">
    <img src={chef} className="comp-kitchen" alt="kitchen" />
    <ButtonInit value="Cocina" />
  </div>
);
const App = () => (
  <div className="App-background">
    <div className="App-background-inside">
      <header className="App-header relative">
        <img src={logo} className="App-logo relative" alt="logo" />
        <img src={slogan} className="App-slogan relative" alt="slogan" />
      </header>
      <main>
        <ContainerButton />
        <CompButtonOrders />
        <CompButtonKitchen />
      </main>
    </div>
  </div>
);
ButtonInit.propTypes = {
  value: PropTypes.string.isRequired,
};
export default App;
