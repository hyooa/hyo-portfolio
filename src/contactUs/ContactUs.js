import React,{ useEffect, useState } from 'react';
import './contactUs.scss';
import { BsSearch } from 'react-icons/bs';
import Input from './component/Input';
import { getCookie } from '../util/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getCon } from '../modules/contactus';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../config/contansts';

const ContactUs = () => {

    // 날짜 고치기 🚀🚀🚀
    
    const [isOpen, setOpen] = useState(false);
    const [isFix, setFix] = useState(false);
    const tableToggle = () => {
        setOpen(isOpen => !isOpen);
    }
    const tableToggle2 = () => {
        setFix(isFix => !isFix);
    }
    
    const {data, loading, error} = useSelector(state=>state.myContactUs.con);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCon())
    }, [dispatch])
    // console.log(data);
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;

   
    function deleteConUs(no) {
        axios.post(`${API_URL}/mypageConDel/${no}`)
        .then(result=> {

        })
        .catch(e => {

        })
    }
    const onDelete = (e) => {
        // if(window.confirm('글을 삭제하시겠습니까 ?\n삭제된 데이터는 복구할 수 없습니다.')) {
        e.preventDefault();
        const no = e.target.className;
        // console.log(no);
        deleteConUs(no);
        alert("문의글 삭제 완료되었습니다.");
        document.location.href = document.location.href
    }

    const now = new Date(); // 현재 시간
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // 현재 시간을 utc로 변환한 밀리세컨드값
    const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
    const koreaNow = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
    // console.log(koreaNow+'koreaNow⭐');

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
                            <li>답변등록여부</li>
                            <li>삭제</li>
                        </ul>
                    </div>
                    {data.map((data) => {
                        // 일자 더하기
                        const originDate = data.date.slice(0,10);
                        const date2 = new Date(originDate);
                        date2.setDate(date2.getDate()+1);
                        // console.log(date2+'date2🚨');
                        const settingDate = date2.toLocaleDateString();
                        // console.log(settingDate);

                        if (data.usermail === 'hyoyoung123@naver.com')
                        return <div id='tableDiv'>
                            <ul onClick={() => tableToggle2()}>
                                <li></li>
                                <li>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{settingDate}</li>
                                <li></li>
                                <li></li>
                                {
                                    userDate === 'hyoyoung123@naver.com' &&
                                    <li className='remove'><button onClick={onDelete} className={`${data.no}`}>삭제</button></li>
                                }
                                {userDate !== 'hyoyoung123@naver.com' && <li></li>}
                                {/* <MdDelete size='20'></MdDelete> */}
                            </ul>
                            <ul id='answer' className={isFix ? 'show2' : 'hide2'}>
                                <li>{data.content}</li>
                            </ul>
                        </div>
                        }
                    )}
                    {data.map((data, index) =>{
                        const originDate = data.date.slice(0,10);
                        const date2 = new Date(originDate);
                        date2.setDate(date2.getDate()+1);
                        // console.log(date2+'date2🚨');
                        const settingDate = date2.toLocaleDateString();
                        // console.log(settingDate);

                        if (data.usermail !== 'hyoyoung123@naver.com')
                        return <div id='tableDiv' key={index}>
                            <ul onClick={() => tableToggle()}>
                                <li>{index}</li>
                                <li>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{settingDate}</li>
                                <li></li>
                                <li></li>
                                {
                                    (userDate === data.usermail || userDate === 'hyoyoung123@naver.com') &&
                                    <li className='remove'><button onClick={onDelete} className={`${data.no}`}>삭제</button></li>
                                }
                                {userDate !== data.usermail && userDate !== 'hyoyoung123@naver.com' && <li></li>}
                                {/* <MdDelete size='20'></MdDelete> */}
                            </ul>
                            <div className={isOpen ? 'show' : 'hide'}>
                                <ul id='question'>
                                    <li>{data.content}</li>
                                </ul>
                                <ul id='answer'>
                                    <li>관리자</li>
                                    {
                                        userDate === 'hyoyoung123@naver.com' &&
                                        <li><textarea 
                                        placeholder='답글을 작성해주세요.'
                                        rows="5" cols="100"></textarea></li>
                                    }
                                    {
                                        userDate !== 'hyoyoung123@naver.com' && <li></li>
                                    }
                                </ul>
                            </div>
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