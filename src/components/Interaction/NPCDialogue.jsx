import React from 'react';

const NPCDialogue = props => {
  if (props.showDialogueBox) {
    return (
      <div data-avoidcollision className='npc-dialogue'>
        <div className='box-inner'>
          <div className='character-portrait'>
            <img src='/img/characters/bar-wench-male.jpg' alt='barman' />
          </div>
          <div className='text-box'>
            <h3>Male Bar Wench</h3>
            <p>Welcome to the Dekel Inn.</p>
            <p>Please come in and give me all your Dekels.</p>
          </div>
          <div className='button-box'>
            <button>Next</button>
            <button onClick={props.setShowDialogueBox}>Leave</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NPCDialogue;
