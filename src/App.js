import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import update from 'immutability-helper';
import './scss/main.scss';
import Map from './components/Maps/Map';
import NPCDialogue from './components/Interaction/NPCDialogue';
import CharacterInfo from './components/Interaction/CharacterInfo';
import Store from './components/Interaction/Store';
import ActionBar from './components/Interaction/ActionBar';

const store = configureStore();

function App() {
  const [showDialogueBox, setShowDialogueBox] = useState(false);
  const [showCharacterInfo, setShowCharacterInfo] = useState(true);
  const [showStore, setShowStore] = useState(false);
  const [pos, setPos] = useState({
    top: 300,
    left: 350
  });
  // eslint-disable-next-line
  const [npc, setNpc] = useState({
    top: 200,
    left: 350,
    width: 25,
    height: 25
  });
  const characterSize = 25;
  const moveAmount = 10;

  const player = document.getElementById('player');
  const tavernKeeper = document.getElementById('tavernKeeper');
  let detectionStyle = {};
  let playerTalking = false;

  if (player && tavernKeeper) {
    const playerDetection = update(player.getBoundingClientRect(), {});
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
      const playerRect = document
        .getElementById('player')
        .getBoundingClientRect();

      const checkCollision = player => {
        let hit = false;

        const mapSize = map.getBoundingClientRect();
        if (leftMap(mapSize, player)) {
          return hit;
        }

        const hitConditions = curEl =>
          curEl.nodeType === 1 &&
          isCollide(curEl.getBoundingClientRect(), player) &&
          curEl.id !== 'player' &&
          curEl.dataset.avoidcollision !== 'true';

        hit = Array.from(map.childNodes).some(curEl => {
          if (hitConditions(curEl)) {
            return true;
          }

          if (Array.from(curEl.childNodes).length > 0) {
            return Array.from(curEl.childNodes).some(
              x => x.nodeType === 1 && hitConditions(x)
            );
          }

          return false;
        });

        return hit;
      };

      switch (key) {
        case UP:
          const u = update(playerRect, {});
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
          const t = update(playerRect, {});
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
          const d = update(playerRect, {});
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
          const l = update(playerRect, {});
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
    <Provider store={store}>
      <div className='App'>
        <ActionBar
          dialogue={() => setShowDialogueBox(!showDialogueBox)}
          character={() => setShowCharacterInfo(!showCharacterInfo)}
          store={() => setShowStore(!showStore)}
        />
        <Map
          playerStyle={playerStyle}
          npcStyle={npcStyle}
          detectionStyle={detectionStyle}
          playerTalking={playerTalking}
          setPlayerTalking={() => closeDialoglue()}
        />
        <NPCDialogue
          showDialogueBox={showDialogueBox}
          setShowDialogueBox={() => setShowDialogueBox(!showDialogueBox)}
        />
        <CharacterInfo
          showCharacterInfo={showCharacterInfo}
          setShowCharacterInfo={() => setShowCharacterInfo(!showCharacterInfo)}
        />
        <Store
          showStore={showStore}
          setShowStore={() => setShowStore(!showStore)}
        />
      </div>
    </Provider>
  );
}

export default App;
