import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API_URL } from '../../../config/contansts';

const AnswerInput = ({data}) => {

    const [input, setInput] = useState({
        no: "",
        answer_text: "",
    });

    const onAnswer = (e) => {
        const { name, value } = e.target;
        setInput({
            no: name,
            answer_text: value
        })
        console.log(name);
        console.log(value);
    }

    function answerText() {
        axios.put(`${API_URL}/answerText`, input)
            .then(res => { })
            .catch(e => { })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        answerText();
        alert("답글 작성완료");
        document.location.href = document.location.href;
    }

    return (
        <>
            <form onSubmit={onSubmit} className='myNoForm'>
                <textarea placeholder='답글을 작성해주세요.'
                    onChange={onAnswer} name={data.no} required
                    rows="5" cols="100"></textarea>
                <button id='btn'>등록하기</button>
            </form>
        </>
    );
};

export default AnswerInput;