import React from 'react';

const Shrub = props => {
  const position = {
    top: props.t,
    left: props.l,
    width: props.w,
    height: props.h
  };

  return <div style={position} className='scenery shrub'></div>;
};

export default Shrub;
