import React from 'react';

const Wall = props => {
  const position = {
    top: props.t,
    left: props.l,
    width: props.w,
    height: props.h
  };

  return <div style={position} className='wall'></div>;
};

export default Wall;
