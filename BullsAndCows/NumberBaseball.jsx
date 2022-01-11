import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
    // 숫자 4개를 겹치지 않고 랜덤으로 뽑는 함수
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruit =[
        {fruit: '사과', taste: '맛있다.'},
        {fruit: '바나나', taste: '노랗다.'},
        {fruit: '배', taste: '맛없다.'},
        {fruit: '무', taste: '맛있다.'},
        {fruit: '밤', taste: '맛없다.'},
        {fruit: '귤', taste: '맛있다.'},
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruit.map((v, i) => {
                        return (
                            <Try value={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;