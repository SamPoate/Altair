import React from "react";

const StoneFloor = props => {
  const position = {
    top: props.t,
    left: props.l,
    width: props.w,
    height: props.h
  };

  return <div style={position} className='stone-floor'></div>;
};

export default StoneFloor;
