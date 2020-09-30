import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <p>{clock}</p>
    </div>
  );
};

export default Clock;
