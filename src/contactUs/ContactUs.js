import React,{ useState } from 'react';
import './contactUs.scss';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

function contactPopup() {
    console.log('클릭');
    document.querySelector('#inputPopup').classList.toggle('inputUp');
}

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
                <div>
                    <div id='fix'>
                        <ul>
                            <li>번호</li>
                            <li>내용</li>
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
                <div id='contact_input'>
                    <p onClick={()=>contactPopup()}>문의하기</p>
                    <form id='inputPopup'>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>아이디</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2021.01.01</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><input placeholder='제목'></input></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><textarea placeholder='내용을 입력해주세요.' rows="10" cols="50"></textarea></TableCell>
                                </TableRow>
                                <TableRow id='checkBox'>
                                    <TableCell>
                                        공개글<input type="checkbox" id='ckOne'></input><label id='labelOne'></label>
                                        비밀글<input type="checkbox" id='ckTwo'></input><label></label>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            <button>등록</button>
                        </Table>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;