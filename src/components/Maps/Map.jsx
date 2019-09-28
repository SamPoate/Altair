import React from 'react';
import Wall from '../Scenery/Wall';
import Bob from '../Characters/Bob';
import Shrub from '../Scenery/Shrub';
import Bush from '../Scenery/Bush';

const Map = () => {
  return (
    <main className='main-map'>
      <div className='corner-marker t l' />
      <div className='corner-marker t r' />
      <div className='corner-marker b l' />
      <div className='corner-marker b r' />
      <Wall />
      <Bob />
      <Shrub />
      <Bush />
    </main>
  );
};

export default Map;
