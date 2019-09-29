import React, { useState, useEffect, useCallback } from 'react';

const Bob = () => {
  const [pos, setPos] = useState({
    top: 700,
    left: 350
  });

  const movement = useCallback(
    e => {
      const key = e.keyCode;
      const UP = 87;
      const RIGHT = 68;
      const DOWN = 83;
      const LEFT = 65;
      const moveAmount = 10;

      switch (key) {
        case UP:
          setPos({
            top: pos.top - moveAmount,
            left: pos.left
          });
          break;

        case RIGHT:
          setPos({
            top: pos.top,
            left: pos.left + moveAmount
          });

          break;

        case DOWN:
          setPos({
            top: pos.top + moveAmount,
            left: pos.left
          });
          break;

        case LEFT:
          setPos({
            top: pos.top,
            left: pos.left - moveAmount
          });
          break;

        default:
          break;
      }
    },
    [pos.top, pos.left]
  );

  useEffect(() => {
    window.addEventListener('keydown', movement);

    return () => {
      window.removeEventListener('keydown', movement);
    };
  }, [movement]);

  const finalPos = {
    top: pos.top + 'px',
    left: pos.left + 'px'
  };

  return <div style={finalPos} className='character bob' />;
};

export default Bob;
//hello
