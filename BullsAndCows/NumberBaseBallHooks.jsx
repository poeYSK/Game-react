import React, { useState, useRef, memo } from 'react';
import TryHooks from './TryHooks';

function getNumbers() {
    console.log("number");
    // 숫자 4개를 겹치지 않고 랜덤으로 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}
const NumberBaseBallHooks = memo(() => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const onRefInput = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => {
                return [...prevTries, { try: value, result: '홈런!' }]
            });
            alert('홈런!!!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            onRefInput.current.focus();
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 시도가 10회 이상
                setResult(`시도 횟수 10회 초과! 정답은 ${answer.join('')} 였습니다.`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, { try: value, result: `${strike}S${ball}B` }];
                })
            }
            onRefInput.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" maxLength={4} value={value} onChange={onChangeInput} ref={onRefInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <TryHooks key={`${i + 1}차 시도`} tryInfo={v} />
                    );
                })}
            </ul>
        </>
    );
});

export default NumberBaseBallHooks;