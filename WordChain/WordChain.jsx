const React = require('react');
const { useState, useRef } =React;

const WordChain = () => {
    const [word, setWord] = useState('강성엽');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        // word의 끝 음절과 value의 첫 음절이 같은 경우
        if(word[word.length - 1] === value[0]) {
            setResult('정답 ( ' + word + ' )');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('오답');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordChain;