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
  // const [playerTalking, setPlayerTalking] = useState(false);
  const characterSize = 25;
  const moveAmount = 10;

  const p = document.getElementById('player');
  const tavernKeeper = document.getElementById('tavernKeeper');
  let detectionStyle = {};
  let playerTalking = false;

  if (p && tavernKeeper) {
    const playerDetection = update(p.getBoundingClientRect(), {});
    const detectionRadius = 50;

    playerDetection.width = characterSize + detectionRadius;
    playerDetection.x = playerDetection.x - detectionRadius / 2;
    playerDetection.height = characterSize + detectionRadius;
    playerDetection.y = playerDetection.y - detectionRadius / 2;

    detectionStyle = {
      width: playerDetection.width,
      height: playerDetection.height,
      top: playerDetection.y,
      left: playerDetection.x
    };

    if (
      isCollide(tavernKeeper.getBoundingClientRect(), playerDetection) &&
      !playerTalking
    ) {
      console.log('hit');
      playerTalking = true;
    } else if (playerTalking) {
      playerTalking = false;
    }
  }

  const movement = useCallback(
    e => {
      const key = e.keyCode;
      const UP = 87;
      const RIGHT = 68;
      const DOWN = 83;
      const LEFT = 65;
      const map = document.getElementById('map');
      const detectionRange = moveAmount;
      const player = document.getElementById('player').getBoundingClientRect();

      const checkCollision = player => {
        let hit = false;

        const mapSize = map.getBoundingClientRect();
        if (leftMap(mapSize, player)) {
          return;
        }

        const elementArr = Array.from(map.childNodes);
        for (let i = 0; i < elementArr.length; i++) {
          if (
            isCollide(elementArr[i].getBoundingClientRect(), player) &&
            elementArr[i].id !== 'player' &&
            elementArr[i].dataset.avoidcollision !== 'true'
          ) {
            hit = true;
            break;
          }

          if (elementArr[i].childNodes.length > 0) {
            const childElementArr = Array.from(elementArr[i].childNodes);

            for (let ci = 0; ci < childElementArr.length; ci++) {
              if (
                childElementArr[ci].nodeType === 1 &&
                isCollide(
                  childElementArr[ci].getBoundingClientRect(),
                  player
                ) &&
                childElementArr[ci].id !== 'player' &&
                childElementArr[ci].dataset.avoidcollision !== 'true'
              ) {
                hit = true;
                break;
              }
            }
          }
        }
        return hit;
      };

      switch (key) {
        case UP:
          const u = update(player, {});
          u.y = u.y - detectionRange;

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
          t.x = t.x + detectionRange;

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
          d.y = d.y + detectionRange;

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

  function leftMap(a, b) {
    return !(
      a.y + a.height > b.y ||
      a.y < b.y + b.height ||
      a.x + a.width > b.x ||
      a.x < b.x + b.width
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

  const closeDialoglue = () => {
    playerTalking = false;
  };

  return (
    <div className='App'>
      <Map
        playerStyle={playerStyle}
        npcStyle={npcStyle}
        detectionStyle={detectionStyle}
        playerTalking={playerTalking}
        setPlayerTalking={() => closeDialoglue()}
      />
      <NPCDialogue />
    </div>
  );
}

export default App;
