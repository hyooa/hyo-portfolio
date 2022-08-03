import React from 'react';
import './contactUs.scss';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

function contactPopup() {
    console.log('클릭');
    document.querySelector('#inputPopup').classList.toggle('inputUp');
}

const ContactUs = () => {
    return (
        <div id='contact'>
            <img src='./image/logo2.png' alt=''></img>
            <div id='contact_top'>
                <h1>Contact Us</h1>
            </div>
            <div id='contact_table'>
                <form>
                    <Table id='table'>
                        <TableBody>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>내용</TableCell>
                                <TableCell>글쓴이</TableCell>
                                <TableCell>작성일</TableCell>
                                <TableCell>답변등록여부</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>고정내용</TableCell>
                                <TableCell>관리자</TableCell>
                                <TableCell>2021.01.01</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>고정내용</TableCell>
                                <TableCell>관리자</TableCell>
                                <TableCell>2021.01.01</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>고정내용</TableCell>
                                <TableCell>관리자</TableCell>
                                <TableCell>2021.01.01</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>ㅇㅇㅇㅇㅇㅇ</TableCell>
                                <TableCell>안녕</TableCell>
                                <TableCell>2021.01.01</TableCell>
                                <TableCell>완료</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>ㅇㅇㅇㅇㅇㅇ</TableCell>
                                <TableCell>안녕</TableCell>
                                <TableCell>20221.01.01</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>ㅇㅇㅇㅇㅇㅇ</TableCell>
                                <TableCell>안녕</TableCell>
                                <TableCell>20221.01.01</TableCell>
                                <TableCell>완료</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>

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