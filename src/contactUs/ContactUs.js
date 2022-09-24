import React, { useEffect, useState } from 'react';
import './contactUs.scss';
import { BsSearch } from 'react-icons/bs';
import Input from './component/Input';
import { getCookie } from '../util/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getCon } from '../modules/contactus';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import Answer from './component/Answer';

const ContactUs = () => {

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
    // console.log(data);
    if (loading) return <div>로딩중</div>;
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

    const userDate = getCookie("usermail");
    // console.log(userDate);

    return (
        // 문제 ) 처음에 값이 없으면 에러 🚨🚨🚨 // 없을땐 없습니다라고 뜨게하기
        <div id='contact'>
            <img src='./image/logo2.png' alt=''></img>
            <div id='contact_top'>
                <h1>Contact Us</h1>
            </div>
            <div id='contact_table'>
                <div id='contact_text'>
                    <p><span>*</span>제목을 클릭하시오.</p>
                </div>
                <div id='search'>
                    <form>
                        <input placeholder='검색하기'></input>
                        <span><BsSearch size='20'></BsSearch></span>
                    </form>
                </div>
                <div>
                    <div id='fix'>
                        <ul>
                            <li>번호</li>
                            <li>제목</li>
                            <li>작성자</li>
                            <li>작성일</li>
                            <li>조회수</li>
                            <li>공개여부</li>
                            <li>답변등록여부</li>
                            <li>삭제</li>
                        </ul>
                    </div>
                    {data.map((data) => {
                        // 일자 더하기
                        const originDate = data.date.slice(0, 10);
                        const date2 = new Date(originDate);
                        date2.setDate(date2.getDate() + 1);
                        // console.log(date2+'date2🚨');
                        const settingDate = date2.toLocaleDateString();
                        // console.log(settingDate);

                        if (data.usermail === 'hyoyoung123@naver.com')
                            return <div id='tableDiv'>
                                <ul>
                                    <li></li>
                                    <li onClick={tableToggle} className={data.no}>{data.title}</li>
                                    <li>{data.username}</li>
                                    <li>{settingDate}</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    {
                                        userDate === 'hyoyoung123@naver.com' &&
                                        <li className='remove'><button onClick={onDelete} className={`${data.no}`}>삭제</button></li>
                                    }
                                    {userDate !== 'hyoyoung123@naver.com' && <li></li>}
                                    {/* <MdDelete size='20'></MdDelete> */}
                                </ul>
                                {data.no === isOpen &&
                                    <ul id='answer'>
                                        <li>{data.content}</li>
                                    </ul>
                                }
                            </div>
                    }
                    )}
                    {data.map((data, index) => {
                        const originDate = data.date.slice(0, 10);
                        const date2 = new Date(originDate);
                        date2.setDate(date2.getDate() + 1);
                        // console.log(date2+'date2🚨');
                        const settingDate = date2.toLocaleDateString();
                        // console.log(settingDate);

                        if (data.usermail !== 'hyoyoung123@naver.com')
                            return <div id='tableDiv' key={index}>
                                <ul>
                                    <li>{index}</li>
                                    {(data.secret !== '비밀글' || userDate === data.usermail || userDate === 'hyoyoung123@naver.com') &&
                                        <>
                                            <li onClick={tableToggle} className={data.no}>{data.title}</li>
                                            <li>{data.username}</li>
                                        </>
                                    }
                                    {(data.secret === '비밀글' && userDate !== data.usermail && userDate !== 'hyoyoung123@naver.com') &&
                                        <>
                                            <li onClick={tableToggle} className={data.no}>비밀글입니다.</li>
                                            <li>비공개</li>
                                        </>
                                    }
                                    <li>{settingDate}</li>
                                    <li></li>
                                    <li>{data.secret}</li>
                                    {data.answer === null ? <li>X</li> : <li>O</li>}
                                    {
                                        (userDate === data.usermail || userDate === 'hyoyoung123@naver.com') &&
                                        <li className='remove'><button onClick={onDelete} className={`${data.no}`}>삭제</button></li>
                                    }
                                    {userDate !== data.usermail && userDate !== 'hyoyoung123@naver.com' && <li></li>}
                                </ul>
                                {data.no === isOpen && (data.secret !== '비밀글' || userDate === data.usermail || userDate === 'hyoyoung123@naver.com') &&
                                    <div>
                                        <ul id='question'>
                                            <li>{data.content}</li>
                                        </ul>
                                        <ul id='answer'>
                                            <li>관리자</li>
                                            {
                                                userDate === 'hyoyoung123@naver.com' &&
                                                (data.answer === null ?
                                                    <Answer data={data}></Answer>
                                                    : <li>{data.answer}</li>)
                                            }
                                            {
                                                userDate !== 'hyoyoung123@naver.com' &&
                                                (data.answer === null ? <li>아직 답변이 등록되지 않았습니다.</li> : <li>{data.answer}</li>)
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                    }
                    )}
                </div>
                {(getCookie("usermail")) ?
                    <Input /> : <a href='/login'><div className='conLogin'>로그인</div></a>
                }
            </div>

        </div>
    );
};

export default ContactUs;