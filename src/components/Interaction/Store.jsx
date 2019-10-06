import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setDrekels } from '../../redux/actions/currencyActions';
import { addToInventory } from '../../redux/actions/inventoryActions';

const items = {
  rings: [
    {
      itemName: 'Gold Ring',
      crowns: 0,
      drekels: 5,
      int: 3,
      wis: 8,
      dex: 1,
      url: '/img/items/ring.png'
    }
  ],
  weapons: [
    {
      itemName: 'Sword',
      crowns: 1,
      drekels: 2,
      str: 3,
      wis: 8,
      dex: 1,
      url: '/img/items/ring.png'
    }
  ]
};

const Store = props => {
  const [showStore, setShowStore] = useState(true);

  const buyItem = item => {
    if (props.drekels >= item.drekels) {
      props.setDrekels(item.drekels);
      props.addToInventory(item);
    }
  };

  if (showStore) {
    return (
      <div data-avoidcollision className='store-container'>
        <div className='box-inner'>
          <h1>Store of Wares</h1>
          <p>
            Welcome to my store, please have a browse and buy anything you want
          </p>
          <div className='inventory'>
            {items.rings.map((r, i) => (
              <div key={i} className='square' onClick={() => buyItem(r)}>
                <img src={r.url} alt='' />
              </div>
            ))}
          </div>
          <div className='btn' onClick={() => setShowStore(false)}>
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
  drekels: state.currency.drekels
});

export default connect(
  mapStateToProps,
  {
    setDrekels,
    addToInventory
  }
)(Store);
