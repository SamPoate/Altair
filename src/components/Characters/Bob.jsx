import React from 'react';

const Bob = () => {
  let charPos = {
    top: '100px',
    left: '350px'
  };

  const movement = () => {
    charPos.top = '150px';
    charPos.left = '450px';
  };

  window.addEventListener('keydown', () => movement(), true);

  return <div style={charPos} className='character bob' />;
};

export default Bob;
