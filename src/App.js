import React, { useState, useEffect, useCallback } from 'react';
import './scss/main.scss';
import Map from './components/Maps/Map';

function App() {
  const [pos, setPos] = useState({
    top: 250,
    left: 350
  });
  // eslint-disable-next-line
  const [npc, setNpc] = useState({
    top: 200,
    left: 350,
    width: 25,
    height: 25
  });

  let playerTalking;
  const characterSize = 25;

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

  const playerSize = {
    width: characterSize + 'px',
    height: characterSize + 'px'
  };

  const playerStyle = { ...finalPos, ...playerSize };

  const npcStyle = {
    top: npc.top + 'px',
    left: npc.left + 'px',
    width: characterSize + 'px',
    height: characterSize + 'px'
  };

  const playerLocation = {
    tl: [pos.top, pos.left],
    tr: [pos.top, pos.left + characterSize],
    br: [pos.top + characterSize, pos.left + characterSize],
    bl: [pos.top + characterSize, pos.left]
  };

  const npcLocation = {
    tl: [npc.top, npc.left],
    tr: [npc.top, npc.left + characterSize],
    br: [npc.top + characterSize, npc.left + characterSize],
    bl: [npc.top + characterSize, npc.left]
  };

  if (JSON.stringify(playerLocation) === JSON.stringify(npcLocation)) {
    playerTalking = true;
  }

  return (
    <div className='App'>
      <Map
        playerStyle={playerStyle}
        npcStyle={npcStyle}
        playerTalking={playerTalking}
      />
    </div>
  );
}

export default App;
