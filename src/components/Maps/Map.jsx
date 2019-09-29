import React from 'react';
import Bob from '../Characters/Bob';
import Shrub from '../Scenery/Shrub';
import Bush from '../Scenery/Bush';
import Tavern from '../Buildings/Tavern';

const Map = () => {
  return (
    <main className='main-map'>
      <div className='corner-marker t l' />
      <div className='corner-marker t r' />
      <div className='corner-marker b l' />
      <div className='corner-marker b r' />
      <Tavern />
      <Bob />
      <Shrub />
      <Bush />
    </main>
  );
};

export default Map;
