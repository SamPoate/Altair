import React, { useState } from 'react';
import { connect } from 'react-redux';

const Inventory = props => {
  /*eslint-disable */
  const [showInventory, setShowInventory] = useState(true);
  const [invSlots, setInvSlots] = useState(34);
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
            {props.items.map((it, i) => (
              <div key={i} className='square'>
                <img src={it.url} alt='' />
              </div>
            ))}
            {/* {[...Array(invSlots)].map((e, i) => (
              <div key={i} className='square'></div>
            ))} */}
          </div>
          <div className='currency-container'>
            <div className='currency-box'>
              <p>
                {props.crowns} <span>Crowns</span>
              </p>
            </div>
            <div className='currency-box'>
              <p>
                {props.drekels} <span>Drekels</span>
              </p>
            </div>
            <div className='currency-box rep-box'>
              <p>
                22 <span>Arath Rep</span>
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
  crowns: state.currency.crowns,
  drekels: state.currency.drekels,
  items: state.inventory.items
});

export default connect(
  mapStateToProps,
  null
)(Inventory);
