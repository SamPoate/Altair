import React, { useState } from 'react';

const Inventory = () => {
  const [showInventory, setShowInventory] = useState(true);

  if (showInventory) {
    return (
      <div data-avoidcollision className='inventory-container'>
        <div className='box-inner'>
          <div className='character-portrait'>
            <img src='/img/characters/character.jpg' alt='character portrait' />
          </div>
          <div className='stats'>
            <div className='stat-box'>
              <h6>Str</h6>
              <p>16</p>
            </div>
            <div className='stat-box'>
              <h6>Int</h6>
              <p>22</p>
            </div>
            <div className='stat-box'>
              <h6>Dex</h6>
              <p>3</p>
            </div>
            <div className='stat-box'>
              <h6>Agi</h6>
              <p>5</p>
            </div>
            <div className='stat-box'>
              <h6>Wis</h6>
              <p>8</p>
            </div>
          </div>
          <div className='inventory'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
          <div className='currency-container'>
            <div className='currency-box'>
              <p>
                30 <span>Shek</span>
              </p>
            </div>
            <div className='currency-box'>
              <p>
                22 <span>Sig</span>
              </p>
            </div>
          </div>
          <div className='btn' onClick={() => setShowInventory(false)}>
            Close
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Inventory;
