import React from 'react';
import Background from './Background';
import { ButtonMenu, ButtonBreakfast, ButtonDrinks} from './Button-foodType';
import '../css/app.css';

const DoOrders = () => (
  <div>
    <Background />
    <div className="flexRow">
      <ButtonBreakfast />
      <ButtonMenu />
      <ButtonDrinks />
    </div>
    <div className="containerAllFood flexRow" />
    <div className="containerFolder flexRow">
      <div className="folder" />
      <div className="folderTwo" />
    </div>
  </div>
);
export default DoOrders;
