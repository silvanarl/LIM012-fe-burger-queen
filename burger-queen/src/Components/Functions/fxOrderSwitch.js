// Resolver el recibir props esta función para pasarlos segun el caso
import React from 'react';

const renderComponentTypeFood = () => {
  switch (selectType) {
    case "1":
      return (
        <MenuView
          menuData={menuData}
          addPropertiesToOrder={addPropertiesToOrder}
        />
      );
    case "2":
      return (
        <DrinksView
          drinksData={drinksData}
          addPropertiesToOrder={addPropertiesToOrder}
        />
      );
    default:
      return (
        <BreackfastView
          breakfastData={breakfastData}
          addPropertiesToOrder={addPropertiesToOrder}
        />
      );
  }
};

export default renderComponentTypeFood;
