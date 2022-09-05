import React, { useCallback, useEffect, useState } from 'react';
import './join.scss';
import { API_URL } from '../config/contansts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {useRouter} from 'next/router';

const Join = () => {
    const navigate = useNavigate();
    const [ formDate, setFormDate ] = useState({
        username : "",
        userpass : "",
        userpassck:"",
        useradd : "",
        userphone : "",
        userbirth : "",
        usersms : "",
        usermail : "",
        gender : "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormDate({
            ...formDate,
            [ name ] : value
        })
        // console.log(name);
        console.log(value);
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
        formDate.useradd !== "" && formDate.userphone !== "" && formDate.userbirth !== "" && 
         formDate.usermail !== "" && formDate.gender !== "" && formDate.usersms !== "") {
            addMember()
            alert(`회원가입이 완료되었습니다.\n환영합니다. ${formDate.username}님`);
        } else {
            alert("다시 확인해주세요.");
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

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onSubmitch();
        }
    }

    // 당일 날짜 이후로는 선택 안되게하기
    function dateCheck(){
        var nowDate = Date.now();
        var timeOff = new
        Date().getTimezoneOffset()*60000;
        var today = new Date(nowDate-timeOff).toISOString().split("T")[0];
        document.getElementById("Date").setAttribute("max", today);
    }
    

    // 이름, 이메일, 비밀번호, 비밀번호 확인
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    
    // 오류메시지 상태저장
    const [nameMessage, setNameMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    // 유효성 검사
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    // const router = useRouter()

    // 이름
    const onChangeName = (e) => {
        setName(e.target.value)
        if(e.target.value.length < 2 || e.target.value.length > 20) {
            setNameMessage('2글자 이상, 20글자 미만으로 입력해주세요.');
            setIsName(false);
        } else {
            setNameMessage('올바른 이름 형식입니다.');
            setIsName(true);
        }
    }

    // 이메일
    const onChangeEmail = (e) => {
        const emailRegex = 
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        // const
    }
    useEffect(()=>{
        dateCheck();
    },[])
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
                                <input type="password" placeholder='8자 이상, 영문자/숫자/특수문자 사용 가능'
                                name="userpass"
                                value={formDate.userpass}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr>
                            <th>Password 확인</th>
                            <td>
                                <input type="password" placeholder='8자 이상, 영문자/숫자/특수문자 사용 가능'
                                name="userpassck"
                                value={formDate.userpassck}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr id='joinData'>
                            <th>Date of Birth</th>
                            <td>
                                <input type="date" id='Date'
                                name="userbirth"
                                value={formDate.userbirth}
                                onChange={onChange}
                                required></input>
                            </td>
                        </tr>
                        <tr id='joinPhone'>
                            <th>Phone Number</th>
                            <td>
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
                        <tr id='gender'>
                            <th>Gender</th>
                            <td>
                                남성 <input type="radio"
                                name="gender"
                                value="남성"
                                onChange={onChange}></input>

                                여성 <input type="radio"
                                name="gender"
                                value="여성"
                                onChange={onChange}></input>
                            </td>
                        </tr>
                        <tr id='joinBox'>
                            <th>SMS 수신 동의</th>
                            <td>
                                동의 <input type="radio"
                                name="usersms"
                                value="동의"
                                onChange={onChange}></input>

                                비동의 <input type="radio"
                                name="usersms"
                                value="비동의"
                                onChange={onChange}></input>
                            </td>
                        </tr>
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