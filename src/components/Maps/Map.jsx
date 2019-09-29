import React from 'react';
import Bob from '../Characters/Bob';
import Shrub from '../Scenery/Shrub';
import Bush from '../Scenery/Bush';
import Tavern from '../Buildings/Tavern';
import DialogueBox from '../Interaction/DialogueBox';

const Map = props => {
  let words;

  if (props.playerTalking) {
    words = 'Hello';
  }

  return (
    <main className='main-map'>
      <div className='corner-marker t l' />
      <div className='corner-marker t r' />
      <div className='corner-marker b l' />
      <div className='corner-marker b r' />
      <Tavern npcStyle={props.npcStyle} />
      <Bob playerStyle={props.playerStyle} />
      {props.playerTalking ? <DialogueBox words={words} /> : null}
      <Shrub />
      <Bush />
    </main>
  );
};

export default Map;
