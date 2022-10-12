import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { API_URL } from '../../config/contansts';
import axios from 'axios';
import { getCookie } from '../../util/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPage } from '../../modules/mypage';

function contactPopup() {
    // console.log('클릭');
    document.querySelector('#inputPopup').classList.toggle('inputUp');
}

const Input = () => {

    let now = new Date();
    const nowDate = now.toLocaleDateString();
    // console.log(nowDate);

    // const usermail = getCookie("usermail");
    // console.log(usermail);
    const [input, setInput] = useState({
        username: getCookie("username"),
        usermail: getCookie("usermail"),
        title: "",
        content: "",
        secret: "",
    })
    // console.log(getCookie("usermail"));

    const onInput = (e) => {
        // console.log(input);
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        })
    }
    function contactInput() {
        // console.log(input)
        axios.post(`${API_URL}/textContact`, input)
            .then(res => {
                // console.log(res);
            })
            .catch(e => {
                // console.log(e);
            })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        contactInput();
        alert("문의글 등록이 완료되었습니다.");
        document.location.href = document.location.href;
    }
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    }

    const username = getCookie("username");
    const usermail = getCookie("usermail");

    return (
        <div id='contact_input'>
            <p onClick={() => contactPopup()}>문의하기</p>
            <form id='inputPopup' onSubmit={onSubmit} onKeyPress={onKeyPress}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>{username}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{nowDate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><input
                                name='title'
                                onChange={onInput} required
                                placeholder='제목'></input></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><textarea
                                name='content'
                                onChange={onInput} required
                                placeholder='내용을 입력해주세요.' rows="10" cols="50"></textarea></TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell><textarea
                                name='keyword'
                                onChange={onInput} required
                                placeholder='해당 문의글의 검색 키워드를 작성해주세요.
                                    구분은 따옴표(,)로 합니다.' rows="3" cols="50"></textarea></TableCell>
                        </TableRow> */}
                        {usermail !== 'hyoyoung123@naver.com' &&
                            <TableRow id='checkBox'>
                                <TableCell>
                                    공개글<input type="radio" onChange={onInput} required
                                        name='secret' value="공개글"></input>
                                    비밀글<input type="radio" onChange={onInput}
                                        name='secret' value="비밀글"></input>
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                    <button>등록</button>
                </Table>
            </form>
        </div>
    );
};

export default Input;