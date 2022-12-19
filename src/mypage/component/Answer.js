import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCon } from '../../modules/contactus';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import AnswerInput from './input/AnswerInput';

const Answer = () => {

    const [open, setOpen] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const tableToggle = (e) => {
        // console.log(e.target.className);
        if (open === Number(e.target.className)) {
            setOpen(null);
        } else {
            setOpen(Number(e.target.className))
        }
    }
    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const { data, loading, error } = useSelector(state => state.myContactUs.con);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCon())
    }, [dispatch])

    if (loading) return;
    if (error) return <div>에러</div>;
    if (!data) return <div>값 없음</div>;

    function deleteConUs(no) {
        axios.post(`${API_URL}/mypageConDel/${no}`)
            .then(result => {

            })
            .catch(e => {

            })
    }
    const onDelete = (e) => {
        if (window.confirm('문의글을 삭제하시겠습니까 ?\n삭제된 데이터는 복구할 수 없습니다.')) {
            e.preventDefault();
            const no = e.target.className;
            // console.log(no);
            deleteConUs(no);
            alert("문의글 삭제 완료되었습니다.");
            document.location.href = document.location.href
        }
    }

    console.log(data);

    return (
        <div id='myNoAnswer'>
            <div id='h2'>
                <h2>미답변 문의글</h2>
                <div id='mypage_answerText'>
                    <p><span>*</span>제목을 클릭하시오.</p>
                </div>
            </div>
            <div id='mypage_answer'>
                <div>
                    <div id='mypage_fix'>
                        <ul>
                            <li>번호</li>
                            <li>제목</li>
                            <li>작성자</li>
                            <li>공개여부</li>
                            <li>답변등록여부</li>
                            <li>삭제</li>
                        </ul>
                    </div>
                    {data.map((data, index) => (
                        (data.answer === null && data.usermail !== 'hyoyoung123@naver.com') &&
                        <div id='mypageInput_Div' key={index}>
                            <ul>
                                <li>{index}</li>
                                <li onClick={tableToggle} className={data.no}>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{data.secret}</li>
                                {data.answer === null ? <li>X</li> : <li>O</li>}
                                <li className='remove'><button onClick={onDelete} className={`${data.no}`}>삭제</button></li>

                            </ul>
                            {data.no === isOpen &&
                                <div>
                                    <ul id='question'>
                                        <li>{data.content}</li>
                                    </ul>
                                    <ul id='answer'>
                                        <AnswerInput data={data}></AnswerInput>
                                    </ul>
                                </div>
                            }
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Answer;