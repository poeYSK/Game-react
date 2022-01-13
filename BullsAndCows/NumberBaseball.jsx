import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
    // 숫자 4개를 겹치지 않고 랜덤으로 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {
        const {result, value, tries, answer} = this.state
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: value, result: '홈런!' }],
            });
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            alert('홈런!!!');
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 시도가 10회 이상
                this.setState({
                    result: `시도 횟수 10회 초과! 정답은 ${answer.join('')} 였습니다.`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...tries, { try: value, result: `${strike}S${ball}B` }],
                    value: '',
                });
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {result, value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도`} tryInfo={v} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;