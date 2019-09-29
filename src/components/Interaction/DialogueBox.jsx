import React from 'react';

const DialogueBox = props => {
  return (
    <div className='dialogue-box'>
      {props.words}
      <div className='btn' onClick={props.setPlayerTalking}>X</div>
      <div className='player-replies'>
        <div>REPLY</div>
        <div>REPLY</div>
        <div>REPLY</div>
        <div>REPLY</div>
      </div>
    </div>
  );
};

export default DialogueBox;
