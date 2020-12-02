import React from 'react';
import useCounter from '../hooks/useCounter';
//컴포넌트에서 필요한 값과 함수들을 모두 props 로 받아오도록 처리
function Counter() {
    const {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy    
    } = useCounter();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>상태값 +1</button>
            <button onClick={onDecrease}>상태값 -1</button>
            <button onClick={() => 
                onIncreaseBy(10)}>현재 상태값 + 10</button>
        </div>
    );
}
export default Counter;