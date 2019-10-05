import React from 'react';
import Wall from './BuildingComponents/Wall';
import StoneFloor from './BuildingComponents/StoneFloor';
import TavernKeeper from '../Characters/NPCs/TavernKeeper';

const Tavern = props => {
  return (
    <div data-collide='false' className='tavern'>
      <Wall w='500px' h='10px' t='150px' l='100px' />
      <Wall w='200px' h='10px' t='650px' l='100px' />
      <Wall w='200px' h='10px' t='650px' l='400px' />
      <Wall w='10px' h='500px' t='150px' l='100px' />
      <Wall w='10px' h='500px' t='150px' l='590px' />
      <StoneFloor w='500px' h='500px' t='150px' l='100px' />
      <TavernKeeper npcStyle={props.npcStyle} />
    </div>
  );
};

export default Tavern;
