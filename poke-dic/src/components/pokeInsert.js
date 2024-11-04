import React, { useState } from 'react';

function PokeInsert({ onInsert }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return; 
        onInsert(value); 
        setValue(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="포켓몬 이름 입력" 
                value={value} 
                onChange={handleChange} 
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default PokeInsert;
