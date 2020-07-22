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
const CompButtonOrders = () => (
  <div className="container-button">
    <img src={waiter} className="comp-waiter" alt="waiter" />
    <ButtonInit value="PEDIDOS" />
  </div>
);
const CompButtonKitchen = () => (
  <div className="container-button">
    <img src={chef} className="comp-kitchen" alt="kitchen" />
    <ButtonInit value="COCINA" />
  </div>
);
const App = () => (
  <div className="App-background">
    <div className="App-background-inside">
      <header className="flexColumn">
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="App-logo ">
          <img src={slogan} alt="slogan" />
        </div>
      </header>
      <main className="flexRow">
        {/* <ContainerButton /> */}
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
