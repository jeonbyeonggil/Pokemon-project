import React from 'react';

function PokeTemplate({ children }) {
   return (
      <div className="PokeTemplate">
         <h1>포켓몬 도감</h1>
         <div className="content">{children}</div>
      </div>
   );
}

export default PokeTemplate;
