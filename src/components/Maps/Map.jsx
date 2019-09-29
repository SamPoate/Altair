import React, { useState } from 'react';
import Bob from '../Characters/Bob';
import Shrub from '../Scenery/Shrub';
import Bush from '../Scenery/Bush';
import Tavern from '../Buildings/Tavern';
import DialogueBox from '../Interaction/DialogueBox';

const Map = props => {
  const [playerReply, setPlayerReply] = useState('');
  let words;

  if (props.playerTalking) {
    words = 'Hello';

    if (playerReply.toLowerCase() === 'hello') {
      words = 'Would you like a drink?';
    }
  }

  return (
    <main className='main-map'>
      <div className='corner-marker t l' />
      <div className='corner-marker t r' />
      <div className='corner-marker b l' />
      <div className='corner-marker b r' />
      <Tavern npcStyle={props.npcStyle} />
      <Bob playerStyle={props.playerStyle} />
      {props.playerTalking ? (
        <DialogueBox
          words={words}
          onChange={e => setPlayerReply(e.target.value)}
          playerReply={playerReply}
          setPlayerTalking={props.setPlayerTalking}
        />
      ) : null}
      <Shrub />
      <Bush />
    </main>
  );
};

export default Map;
