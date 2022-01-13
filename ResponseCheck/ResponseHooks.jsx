import React, { useState, useRef } from 'react';

const ResponseHooks = () => {
    const [state, setState] = useState('waiting');
    const [message, setMassage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();
    
    /* Ref는 current로 접근을 해야함. */
    const onClickScreen = () => {
        if(state === 'waiting') {
            setState('ready');
            setMassage('초록색이 되면 클릭하세요.');
            timeout.current = setTimeout(()=>{
                setState('now');
                setMassage('지금 클릭!');
                startTime.current = new Date();
            }, Math.floor(Math.random()*500) + 2000);
        } else if(state === 'ready') {
            clearTimeout(timeout.current);
            setState('waiting');
            setMassage('예측 금지!! 누르면 다시 시작할 수 있습니다.');
        } else if(state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMassage('클릭해서 시작하세요.');
            setResult((prevResult => {
                return [...prevResult, endTime.current - startTime.current];
            }))
        }
    }

    const onReset = () => {
        setResult([]);
    }

    const renderAverage = () => {
        return (
            result.length === 0 ? null :
            <>
                <div>
                    평균 시간: {result.reduce((a, c) => a + c) / result.length}ms
                </div>
                <button onClick={onReset}>Reset</button>
            </>
        );
    }
    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponseHooks;