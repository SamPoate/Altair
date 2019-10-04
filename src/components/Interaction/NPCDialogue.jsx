import React, { useState } from 'react';

const NPCDialogue = () => {
  const [dialogueBox, setDialogueBox] = useState(true);

  if (dialogueBox) {
    return (
      <div className='npc-dialogue'>
        <div className='box-inner'>
          <div className='close' onClick={() => setDialogueBox(false)}>
            X
          </div>
          <div className='character-portrait'>
            <img src='/img/characters/bar-wench-male.jpg' alt='barman' />
          </div>
          <div className='text-box'>
            <h3>Male Bar Wench</h3>
            <p>Welcome to the Shekel Inn.</p>
            <p>
              Please come in and give me all your shekels as I need them to save
              more money.
            </p>
          </div>
          <div className='button-box'>
            <button>Next</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NPCDialogue;
