import React from 'react';
import Wall from '../Scenery/Wall';

const Map = () => {
  return (
    <main className='main-map'>
      <div className='corner-marker t l' />
      <div className='corner-marker t r' />
      <div className='corner-marker b l' />
      <div className='corner-marker b r' />
      <Wall />
    </main>
  );
};

export default Map;
