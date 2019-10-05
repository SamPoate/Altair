import React, { useState, useEffect, useCallback } from 'react';
import './scss/main.scss';
import Map from './components/Maps/Map';
import NPCDialogue from './components/Interaction/NPCDialogue';
import update from 'immutability-helper';

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
  const [playerTalking, setPlayerTalking] = useState(false);
  const characterSize = 25;
  const moveAmount = 10;

  const movement = useCallback(
    e => {
      const key = e.keyCode;
      const UP = 87;
      const RIGHT = 68;
      const DOWN = 83;
      const LEFT = 65;
      const player = document.getElementById('player').getBoundingClientRect();

      const map = document.getElementById('map');

      const checkCollision = player => {
        let hit = false;
        const elementArr = Array.from(map.childNodes);
        for (let i = 0; i < elementArr.length; i++) {
          if (
            isCollide(elementArr[i].getBoundingClientRect(), player) &&
            elementArr[i].id !== 'player'
          ) {
            hit = true;
          }
        }
        return hit;
      };

      switch (key) {
        case UP:
          const u = update(player, {});
          u.y = u.y - moveAmount;

          if (checkCollision(u)) {
            break;
          }

          setPos({
            top: pos.top - moveAmount,
            left: pos.left
          });
          break;

        case RIGHT:
          const t = update(player, {});
          t.x = t.x + moveAmount;

          if (checkCollision(t)) {
            break;
          }

          setPos({
            top: pos.top,
            left: pos.left + moveAmount
          });
          break;

        case DOWN:
          const d = update(player, {});
          d.y = d.y + moveAmount;

          if (checkCollision(d)) {
            break;
          }

          setPos({
            top: pos.top + moveAmount,
            left: pos.left
          });
          break;

        case LEFT:
          const l = update(player, {});
          l.x = l.x - moveAmount;

          if (checkCollision(l)) {
            break;
          }

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

  function isCollide(a, b) {
    return !(
      a.y + a.height < b.y ||
      a.y > b.y + b.height ||
      a.x + a.width < b.x ||
      a.x > b.x + b.width
    );
  }

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

  if (
    JSON.stringify(playerLocation) === JSON.stringify(npcLocation) &&
    !playerTalking
  ) {
    setPlayerTalking(true);
  }

  const closeDialoglue = () => {
    setPos({
      top: pos.top + moveAmount,
      left: pos.left
    });
    setPlayerTalking(false);
  };

  return (
    <div className='App'>
      <Map
        playerStyle={playerStyle}
        npcStyle={npcStyle}
        playerTalking={playerTalking}
        setPlayerTalking={() => closeDialoglue()}
      />
      <NPCDialogue />
    </div>
  );
}

export default App;
