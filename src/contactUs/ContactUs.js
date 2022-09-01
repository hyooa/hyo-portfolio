import React,{ useState } from 'react';
import './contactUs.scss';
import { BsSearch } from 'react-icons/bs';
import Input from './component/Input';
import { getCookie } from '../util/cookie';

const ContactUs = () => {
    const [isOpen, setOpen] = useState(false);
    const [isFix, setFix] = useState(false);
    const tableToggle = () => {
        setOpen(isOpen => !isOpen);
    }
    const tableToggle2 = () => {
        setFix(isFix => !isFix);
    }

    return (
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
                        </ul>
                    </div>
                    
                    <div id='tableDiv'>
                        <ul onClick={() => tableToggle2()}>
                            <li></li>
                            <li>고정내용</li>
                            <li>관리자</li>
                            <li>작성일</li>
                            <li></li>
                        </ul>
                        <ul id='answer' className={isFix ? 'show2' : 'hide2'}>
                            <li>내용 ~~~~</li>
                        </ul>
                    </div>

                    <div id='tableDiv'>
                        <ul onClick={() => tableToggle()}>
                            <li>1</li>
                            <li>내용</li>
                            <li>글쓴이</li>
                            <li>2011.01.01</li>
                            <li>완료</li>
                        </ul>
                        <div className={isOpen ? 'show' : 'hide'}>
                            <ul id='question'>
                                <li>질문내용 ~~~~</li>
                            </ul>
                            <ul id='answer'>
                                <li>관리자</li>
                                <li>답변내용</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {(getCookie("usermail")) ?
                <Input /> : <a href='/login'><div className='conLogin'>로그인</div></a>
                }
            </div>
            
        </div>
    );
};

export default ContactUs;