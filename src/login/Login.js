import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import { setCookie } from '../util/cookie';
import { goToHome, setLogin } from '../modules/logincookie';

const LoginStyled = styled.div`
    margin : 0 auto;
    text-align : center;
    align-items: center;
    margin-top: 110px;
    img {
        opacity: 0.1;
        position: fixed;
        top: 0;
        left: 0;
        width: 49%;
    }
`;
const LoginTable = styled.table`
    tr {
        position: relative;
    }
    th {
        position: absolute;
        top: 20px;
        left: 10px;
        background-color: #e6e2dd;
        padding: 0 10px;
    }
`;
const LoginInput = styled.input`
    outline: none;
    border: 1px solid #333;
    background: none;
    margin: 30px 0;
    width: 600px;
    height: 70px;
    font-size: 16px;
    text-align: center;
`;
const FanName = styled.div`
    padding: 50px 0;
    h1 {
        font-size: 140px;
    }
`;
const LoginBtn = styled.div`
    display: flex;
    width: 400px;
    margin-top: 30px;
    #loginDiv {
        border: 2px solid yellow;
        width: 130px;
        height: 60px;
        position: relative;
        &:hover{
            transition: 0.5s;
        }
        button {
            background-color: #001489;
            color: #fff;
            outline: none;
            border: none;
            width: 130px;
            height: 60px;
            font-size: 16px;
            position: absolute;
            top: -10px;
            left: -10px;
            transition: 0.3s;
            cursor: pointer;
            a {
                padding: 20px 35px;
            }
        }
        &:hover button {
            top: -2px;
            left: -2px;
            transition: 0.3s;
            background-color: #001350;
        }
    }
`;

const Test = styled.div`
    padding: 10px 0;
    width : 300px;
    border : 1px solid #ccc;
    position: absolute;
    bottom: 20px;
    right: 50px;
    ul {
        padding-top:5px;
        text-align:left;
        padding-left:30px;
    }
`;

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginDate, setLoginDate] = useState({
        usermail: "",
        userpass: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setLoginDate({
            ...loginDate,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (loginDate.usermail === '' || loginDate.userpass === '') {
            alert("이메일과 비밀번호를 입력해주세요.");
        } else {
            axios.post(`${API_URL}/login`, loginDate)
                .then(result => {
                    let usermail = result.data.usermail;
                    let username = result.data.username;
                    console.log(result);

                    if (usermail !== null && usermail !== '' && usermail !== undefined) {
                        alert("로그인 되었습니다.");
                        const expires = new Date();
                        expires.setMinutes(expires.getMinutes() + 60);
                        setCookie('usermail', `${usermail}`, { path: '/', expires })
                        setCookie('username', `${username}`, { path: '/', expires })
                        dispatch(setLogin())
                        dispatch(goToHome(navigate))

                        // id, pw 모두 일치 
                        // 작업 완료 되면 페이지 이동(새로고침)
                        // sessionStorage.setItem('user_id', id)
                        // document.location.href = '/'
                    } else {
                        alert("이메일과 비밀번호를 확인해주세요.");
                    }
                })
                .catch(e => {
                    alert("이메일과 비밀번호를 확인해주세요.");
                })
        }
    }

    return (
        <LoginStyled>
            <img src='./image/logo2.png' alt=''></img>
            <FanName>
                <h1>Hello Blues</h1>
            </FanName>
            <div id='login'>
                <form onSubmit={onSubmit}>
                    <LoginTable>
                        <tr>
                            <th>Email</th>
                            <LoginInput
                                placeholder='이메일을 입력하세세요.'
                                name='usermail'
                                value={loginDate.usermail}
                                onChange={onChange}
                                required></LoginInput>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <LoginInput type="password"
                                placeholder='비밀번호를 입력하세세요.'
                                name='userpass'
                                value={loginDate.userpass}
                                onChange={onChange}
                                required></LoginInput>
                        </tr>
                    </LoginTable>
                    <LoginBtn>
                        <div id='loginDiv'>
                            <button type='submit' value="로그인">Login</button>
                        </div>
                        <div id='loginDiv'>
                            <button><a href='join'>Join Us</a></button>
                        </div>
                    </LoginBtn>
                </form>
            </div>
            <Test>
                <div>[ 관리자 계정 ]</div>
                <ul>
                    <li>Email : hyoyoung123@naver.com</li>
                    <li>Password : 0000</li>
                </ul>
            </Test>
        </LoginStyled>
    );
};

export default Login;