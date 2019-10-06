import React from 'react';
import { connect } from 'react-redux';
import {
  addToCharacter,
  removeFromCharacter
} from '../../redux/actions/characterActions';
import {
  addToInventory,
  removeFromInventory
} from '../../redux/actions/inventoryActions';

const CharacterInfo = props => {
  const charSlots = props.character.slots - props.character.items.length;
  const invSlots = props.slots - props.items.length;
  const itemInt = props.character.items.map(i => i.int);
  const int = props.stats.int + itemInt.reduce((a, b) => a + b, 0);

  const addToCharacter = item => {
    if (charSlots !== 0) {
      props.removeFromInventory(item);
      props.addToCharacter(item);
    }
  };

  const removeFromCharacter = item => {
    props.addToInventory(item);
    props.removeFromCharacter(item);
  };

  if (props.showCharacterInfo) {
    return (
      <div data-avoidcollision className='inventory-container'>
        <div className='box-inner'>
          <div className='character-portrait'>
            <img src='/img/characters/character.jpg' alt='character portrait' />
          </div>
          <h3>Character Equipment</h3>
          <div className='character-equipment'>
            {props.character.items.map((x, i) => (
              <div
                key={i}
                className='square'
                onClick={() => removeFromCharacter(x)}
              >
                <img src={x.url} alt='' />
              </div>
            ))}
            {[...Array(charSlots)].map((e, i) => (
              <div key={i} className='square'></div>
            ))}
          </div>
          <div className='stats'>
            <div className='stat-box'>
              <h6>Str</h6>
              <p>{props.stats.str}</p>
            </div>
            <div className='stat-box'>
              <h6>Int</h6>
              <p>{int}</p>
            </div>
            <div className='stat-box'>
              <h6>Dex</h6>
              <p>{props.stats.dex}</p>
            </div>
            <div className='stat-box'>
              <h6>Agi</h6>
              <p>{props.stats.agi}</p>
            </div>
            <div className='stat-box'>
              <h6>Wis</h6>
              <p>{props.stats.wis}</p>
            </div>
          </div>
          <h3>Inventory</h3>
          <div className='inventory'>
            {props.items.map((it, i) => (
              <div
                key={i}
                className='square'
                onClick={() => addToCharacter(it)}
              >
                <img src={it.url} alt='' />
              </div>
            ))}
            {[...Array(invSlots)].map((e, i) => (
              <div key={i} className='square'></div>
            ))}
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
          <div className='btn' onClick={props.setShowCharacterInfo}>
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
  character: state.character,
  items: state.inventory.items,
  slots: state.inventory.slots,
  stats: state.stats
});

export default connect(
  mapStateToProps,
  {
    addToCharacter,
    removeFromCharacter,
    addToInventory,
    removeFromInventory
  }
)(CharacterInfo);
