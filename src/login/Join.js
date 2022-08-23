import React, { useState } from 'react';
import './join.scss';
import { API_URL } from '../config/contansts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const navigate = useNavigate();
    const [ formDate, setFormDate ] = useState({
        username : "",
        userpass : "",
        userpassck:"",
        useradd : "",
        userphone : "",
        // userbirth : "",
        // usersms : "",
        // userdate : "",
        usermail : "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormDate({
            ...formDate,
            [ name ] : value
        })
    }
    const onSubmitch = (e) => {
        // form에 원래 연결된 이벤트 제거
        e.preventDefault();
        // 전화번호가 숫자인지 체크
        if(isNaN(formDate.userphone)) {
            alert("전화번호는 숫자만 입력해주세요.");
        }
        // input에 값이 있는지 체크하고
        // 입력이 다 되어있으면 post 전송
        if (formDate.username !== "" && formDate.userpass !== "" && formDate.userpassck !== "" &&
        formDate.useradd !== "" && formDate.userphone !== "" && 
         formDate.usermail !== "") {
            addMember()
        }
    }
    function addMember() {
        axios.post(`${API_URL}/join`, formDate)
        .then( res => {
            console.log(res);
            navigate('/');
        })
        .catch( e => {
            console.log(e);
        })
    }

    return (
        <div id='joinStyled'>
            <img src='./image/logo2.png' alt=''></img>
            <div id='joinText'>
                <h1>Welcome</h1>
                <h1>Create an account</h1>
            </div>
            <div id='join'>
                <form onSubmit={onSubmitch}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>
                                <input
                                name="username" type="text"
                                value={formDate.username}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr id='mail'>
                            <th>Email</th>
                            <td>
                                <input
                                name="usermail" type="text"
                                value={formDate.usermail}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>
                                <input type="password" placeholder='8자 이상, 문자/숫자/기호 사용 가능'
                                name="userpass"
                                value={formDate.userpass}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr>
                            <th>Password 확인</th>
                            <td>
                                <input type="password" placeholder='8자 이상, 문자/숫자/기호 사용 가능'
                                name="userpassck"
                                value={formDate.userpassck}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        {/* <tr id='joinData'>
                            <th>Date of Birth</th>
                            <td>
                                <input type="date"
                                name="userdate"
                                value={formDate.userdate}
                                onChange={onChange}></input>
                            </td>
                        </tr> */}
                        <tr id='joinPhone'>
                            <th>Phone Number</th>
                            <td>
                                {/* <input></input> - <input></input> - <input></input> */}
                                <input
                                name="userphone" type="text"
                                value={formDate.userphone}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr id='joinAdd'>
                            <th>Address</th>
                            <td>
                                <input
                                name="useradd" type="text"
                                value={formDate.useradd}
                                onChange={onChange}
                                required></input>
                                <button>우편번호검색</button>
                            </td>
                        </tr>
                        {/* <tr id='joinBox'>
                            <th>SMS 수신 동의</th>
                            <td>
                                동의 <input type="checkbox"
                                name="usersms"
                                value={formDate.usersms}
                                onChange={onChange}></input>

                                비동의 <input type="checkbox"
                                name="usersms"
                                value={formDate.usersms}
                                onChange={onChange}></input>
                            </td>
                        </tr> */}
                    </table>
                    <div id='joinBtn'>
                        <button type="submit">Join Us</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;