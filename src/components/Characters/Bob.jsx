import React, { useState } from 'react';

const Bob = () => {
  const [pos, setPos] = useState({
    top: '100px',
    left: '350px'
  });

  const movement = () => {
    const pos = {
      top: '150px',
      left: '450px'
    };

    setPos(pos);
  };

  window.addEventListener('keydown', () => movement(), true);

  return <div style={pos} className='character bob' />;
};

export default Bob;
//hello