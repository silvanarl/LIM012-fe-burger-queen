import React from 'react';
import { useHistory } from 'react-router-dom';

const Exit = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/orders');
  };
  return (
    <button type="button" className="button-exit" onClick={handleClick}>
      SALIR
    </button>
  );
};

export default Exit;
