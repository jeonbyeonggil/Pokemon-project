import React from 'react';
import PokeListItem from './pokeListItem';  

function PokeList({ pokes, onRemove, onToggle }) {
   return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
         {pokes.map((poke) => (
            <PokeListItem
               key={poke.id}
               poke={poke}      
               onRemove={onRemove}
               onToggle={onToggle}
            />
         ))}
      </div>
   );
}

export default PokeList;
