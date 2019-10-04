import React, { useState } from 'react';
import Bob from '../Characters/Bob';
import Tree from '../Scenery/Tree';
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
    <main id='map' className='main-map'>
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
      <Tree w='150px' h='150px' t='300px' l='700px' />
      <Tree w='125px' h='125px' t='400px' l='800px' />
      <Tree w='100px' h='100px' t='500px' l='750px' />
      <Tree w='100px' h='100px' t='600px' l='800px' />
      <Tree w='110px' h='110px' t='630px' l='710px' />

      <Tree w='110px' h='110px' t='630px' l='710px' />
      <Tree w='130px' h='130px' t='230px' l='850px' />
      <Tree w='125px' h='125px' t='50px' l='650px' />
      <Tree w='140px' h='140px' t='130px' l='710px' />
      <Tree w='155px' h='155px' t='50px' l='850px' />
    </main>
  );
};

export default Map;
