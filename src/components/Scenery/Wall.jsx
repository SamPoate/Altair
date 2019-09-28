import React from 'react';

const Wall = () => {
  const wallPositionRandomiser = () => {
    const wallPosition = {
      top: '100px',
      left: '350px'
    };

    wallPosition.top = Math.round(Math.random() * 1000);
    wallPosition.left = Math.round(Math.random() * 1000);

    return wallPosition;
  };

  return <div style={wallPositionRandomiser()} className='wall'></div>;
};

export default Wall;
