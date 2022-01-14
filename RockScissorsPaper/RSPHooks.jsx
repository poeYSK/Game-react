import React, { useState, useRef, useEffect } from 'react';

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const RSPHooks = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect( () => { // componentDidMount, componentDidUpdate 역할(1:1 대응은 아님)
        interval.current = setInterval(changeHand, 100);
        return () => { // componentWillUnmount 역할
            clearInterval(interval.current);
        }
    }, [imgCoord]); // [] 안에는 다시 실행할 값만 들어감

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    };

    const onClickBtn = (choice) => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0) {
            setResult('무승부');
        } else if([-1, 2].includes(diff)){
            setResult('승리');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('패배');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 2000);
    };

    return (
        <>
            <div id="computer" style={{ background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                <button id="scissors" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재: {score}점</div>
        </>
    );
};

export default RSPHooks;