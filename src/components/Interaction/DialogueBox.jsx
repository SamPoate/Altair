import React from 'react';

const DialogueBox = props => {
  return (
    <div className='dialogue-box'>
      {props.words}
      <input
        type='text'
        name='playerReplay'
        onChange={props.onChange}
        value={props.playerReply}
      />
      <button onClick={props.setPlayerTalking}>X</button>
    </div>
  );
};

export default DialogueBox;
