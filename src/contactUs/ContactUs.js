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

    // var localTime = moment().format('YYYY-MM-DD');
    // var localTime = moment().utc().format('YYYY-MM-DD')
    // console.log(localTime.slice(0,10));
    // let now = localTime.slice(0,10);

    // 2022-08-30T15:00:00.000Z 자르기
    var localTime = data[0].date;
    const now = localTime.slice(0,10);


    // console.log(data[0].no);
    function deleteConUs(no) {
        axios.post(`${API_URL}/mypageConDel/${no}`)
        .then(result=> {

        })
        .catch(e => {

        })
    }
    const onDelete = (e) => {
        e.preventDefault();
        const no = e.target.className;
        // console.log(no);
        deleteConUs(no);
        alert("문의글 삭제 완료되었습니다.");
            document.location.href = document.location.href
    }

    const userDate = getCookie("usermail");
    // console.log(userDate);
    const userEmail = data[0].usermail;
    console.log(data);
    console.log(userEmail);

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
                            <li>글쓴이</li>
                            <li>작성일</li>
                            <li>답변등록여부</li>
                            <li>삭제</li>
                        </ul>
                    </div>
                    {data.map((data) => {
                        if (data.usermail === 'hyoyoung123@naver.com')
                        return <div id='tableDiv'>
                            <ul onClick={() => tableToggle2()}>
                                <li></li>
                                <li>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{now}</li>
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
                        if (data.usermail !== 'hyoyoung123@naver.com')
                        return <div id='tableDiv' key={index}>
                            <ul onClick={() => tableToggle()}>
                                <li>{index-1}</li>
                                <li>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{now}</li>
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