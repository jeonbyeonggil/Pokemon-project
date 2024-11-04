import React, { useState } from 'react';
import './css/pokeListItem.css';

function PokeListItem({ poke, onRemove }) {
    const [currentEvolution, setCurrentEvolution] = useState(0);
    const [isEvolving, setIsEvolving] = useState(false);
    const [isGrayscale, setIsGrayscale] = useState(false);

    if (!poke) return null;

    const { id, text } = poke;

    // 비교연산자를 응용한 포켓몬 진화 단계 설정 
    const evolutions = text === '파이리' 
        ? ['파이리', '리자드', '리자몽']
        : text === '이상해씨'
        ? ['이상해씨', '이상해풀', '이상해꽃']
        : text === '꼬부기'
        ? ['꼬부기', '어니부기', '거북왕']
        : text === '피카츄'
        ? ['피카츄', '라이츄']
        : text === '아보'
        ? ['아보', '아보크']
        : text === '캐터피'
        ? ['캐터피', '단데기']
        : text === '삐삐'
        ? ['삐삐', '픽시']
        : text === '꼬렛'
        ? ['꼬렛', '레트라']
        : [text]; 

    // 진화 함수, 애니메이션 작업 시작
    const handleEvolve = () => {
        if (currentEvolution < evolutions.length - 1) {
            setIsEvolving(true);
            setTimeout(() => {
                setCurrentEvolution((prev) => prev + 1);
                setIsEvolving(false);
            }, 1000); // 1초 동안 애니메이션 효과
        }
    };

    // 진화 전 단계로 돌아가는 함수
    const handleDevolve = () => {
        if (currentEvolution > 0) {
            setIsEvolving(true);
            setTimeout(() => {
                setCurrentEvolution((prev) => prev - 1);
                setIsEvolving(false);
            }, 1000); // 1초 동안 애니메이션 효과
        }
    };
    // 진화 함수 작업 종료

    // 이미지와 이름을 회색으로 변경하는 코드
    const handleDoubleClick = () => {
        setIsGrayscale(!isGrayscale);
    };

    return (
        <div className="TodoListItem">
            <div
                className={`image ${isEvolving ? 'evolving' : ''} ${isGrayscale ? 'grayscale' : ''}`}
                style={{ backgroundImage: `url(/image/${evolutions[currentEvolution]}.png)` }}
                onDoubleClick={handleDoubleClick}
            >
                <div className="button-container">
                    {currentEvolution < evolutions.length - 1 && (
                        <button className="evolve" onClick={handleEvolve}>진화</button>
                    )}
                    {currentEvolution > 0 && (
                        <button className="devolve" onClick={handleDevolve}>진화 전</button>
                    )}
                    <button className="remove" onClick={() => onRemove(id)}>
                    </button>
                </div>
            </div>
            <div className="text">{text}</div>
        </div>
    );
}

export default PokeListItem;
