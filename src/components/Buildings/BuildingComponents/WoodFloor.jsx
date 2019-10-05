import React from 'react';

const WoodFloor = props => {
  const position = {
    top: props.t,
    left: props.l,
    width: props.w,
    height: props.h
  };

  return (
    <div data-collide={false} style={position} className='wood-floor'></div>
  );
};

export default WoodFloor;
