import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div>
      <p>{clock}</p>
    </div>
  );
};

export default Clock;
