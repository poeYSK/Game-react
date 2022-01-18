import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumber() {
    console.log('getWinNumer 함수');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumber = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumber, bonusNumber];
}

const LottoHooks = () => {
    const lottoNumbers = useMemo(() => getWinNumber(), []); // getWinNumbers함수 결과값을 저장해놓아 재실행 방지
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        console.log('useEffect!');
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => {
                    return [...prevBalls, winNumbers[i]];
                })
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);

        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]); // input 자리가 빈 배열이면 componentDidMount와 같은 역할, timeouts.current가 바뀔 때 재실행

    const onClickRedo = useCallback(() => { // useCallback : 함수를 기억
        console.log('winNumbers = ', winNumbers)
        setWinNumbers(getWinNumber());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]); // winNumbers가 바뀔때 재실행

    return (
        <>
            <div>당첨 숫자</div>
            <div id="result">
                {winBalls && winBalls.map((item) => <Ball key={item} number={item} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
};

export default LottoHooks;