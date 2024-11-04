import React, { useState, useRef, useCallback } from 'react';
import PokeTemplate from './components/pokeTemplate';
import PokeInsert from './components/pokeInsert';
import PokeList from './components/pokeList.js';

function App() {
   const [pokes, setPokes] = useState([]);
   const nextId = useRef(1);

   const onInsert = useCallback((text) => {
      const poke = {
         id: nextId.current,
         text,
         checked: false,
      };
      setPokes(pokes.concat(poke));
      nextId.current += 1;
   }, [pokes]);

   const onRemove = useCallback((id) => {
      const removedPokes = pokes.filter((poke) => poke.id !== id);
      setPokes(removedPokes);
   }, [pokes]);

   const onToggle = useCallback((id) => {
      const togglePokes = pokes.map((poke) =>
         poke.id === id ? { ...poke, checked: !poke.checked } : poke
      );
      setPokes(togglePokes);
   }, [pokes]);

   return (
      <PokeTemplate>
         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PokeInsert onInsert={onInsert} />
            <button onClick={() => setPokes([])}>삭제</button>
         </div>
         <PokeList pokes={pokes} onRemove={onRemove} onToggle={onToggle} />
      </PokeTemplate>
   );
}

export default App;
