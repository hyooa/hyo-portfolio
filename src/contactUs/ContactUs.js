import React,{ useEffect, useState } from 'react';
import './contactUs.scss';
import { BsSearch } from 'react-icons/bs';
import Input from './component/Input';
import { getCookie } from '../util/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getCon } from '../modules/contactus';
import { MdDelete } from 'react-icons/md';

const ContactUs = () => {
    
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

    return (
        // 문제 ) 처음에 값이 없으면 에러 🚨🚨🚨
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
                        if (data.username === '관리자')
                        return <div id='tableDiv'>
                            <ul onClick={() => tableToggle2()}>
                                <li></li>
                                <li>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{now}</li>
                                <li></li>
                                <li className='remove'><button><MdDelete size='20'></MdDelete></button></li>
                            </ul>
                            <ul id='answer' className={isFix ? 'show2' : 'hide2'}>
                                <li>{data.content}</li>
                            </ul>
                        </div>
                        }
                    )}
                    {data.map((data, index) =>{
                        if (data.username !== '관리자')
                        return <div id='tableDiv' key={index}>
                            <ul onClick={() => tableToggle()}>
                                <li>{index}</li>
                                <li>{data.title}</li>
                                <li>{data.username}</li>
                                <li>{now}</li>
                                <li></li>
                                <li className='remove'><button><MdDelete size='20'></MdDelete></button></li>
                            </ul>
                            <div className={isOpen ? 'show' : 'hide'}>
                                <ul id='question'>
                                    <li>{data.content}</li>
                                </ul>
                                <ul id='answer'>
                                    <li>관리자</li>
                                    <li></li>
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