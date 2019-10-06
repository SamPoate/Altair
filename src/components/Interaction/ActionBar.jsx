import React from 'react';

const ActionBar = props => {
  return (
    <div className='action-bar'>
      <div className='btn' onClick={props.character}>
        Character
      </div>
      <div className='btn' onClick={props.store}>
        Store
      </div>
      <div className='btn' onClick={props.dialogue}>
        Dialogue
      </div>
    </div>
  );
};

export default ActionBar;
