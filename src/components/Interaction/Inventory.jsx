import React, { useState } from 'react';
import { connect } from 'react-redux';

const Inventory = props => {
  /*eslint-disable */
  const [showInventory, setShowInventory] = useState(true);
  const [invSlots, setInvSlots] = useState(34);
  const [sig, setSig] = useState(78);
  const [int, setInt] = useState(22);
  const [str, setStr] = useState(16);
  /*eslint-enable */

  //Inventory items need to be a list of pictures
  //URLS picked from an external js inventory library

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
              <p>{str}</p>
            </div>
            <div className='stat-box'>
              <h6>Int</h6>
              <p>{int}</p>
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
            <div className='square'>
              <img src='/img/items/ring.png' alt='ring' />
            </div>
            {[...Array(invSlots)].map((e, i) => (
              <div key={i} className='square'></div>
            ))}
          </div>
          <div className='currency-container'>
            <div className='currency-box'>
              <p>
                {props.shek} <span>Shek</span>
              </p>
            </div>
            <div className='currency-box'>
              <p>
                {sig} <span>Sig</span>
              </p>
            </div>
            <div className='currency-box rep-box'>
              <p>
                22 <span>Bank or Arath Rep</span>
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

const mapStateToProps = state => ({
  shek: state.currency.shekels
});

export default connect(
  mapStateToProps,
  null
)(Inventory);
