import React, { useEffect, useState } from 'react';
import './join.scss';
import { API_URL } from '../config/contansts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const Join = () => {

    // 팝업창 상태 관리
    const [isPopupOpen, setIspopupOpen] = useState(false);

    const onAddData = (data) => {
        setFormData({
            ...formData,
            my_add1: data.address
        })
    }

    // 팝업창 상태 true 변경
    const openPostCode = () => {
        setIspopupOpen(true);
    }
    // 팝업창 상태 false 변경
    const closePostCode = () => {
        setIspopupOpen(false);
    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        my_add1: "",
        my_add2: "",
        userbirth: "",
        usersms: "",
        gender: "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(value);
    }

    const onSubmitch = (e) => {
        // form에 원래 연결된 이벤트 제거
        e.preventDefault();

        axios.post(`${API_URL}/join`, {
            ...formData,
            ...name,
            ...email,
            ...pass,
            ...passck,
            ...phone,
        })
            .then(res => {
                console.log(res);
                alert(`회원가입이 완료되었습니다.\n환영합니다. ${name.username}님`);
                navigate('/');
            })
            .catch(e => {
                console.log(e);
            })
    }

    // 당일 날짜 이후로는 선택 안되게하기
    function dateCheck() {
        var nowDate = Date.now();
        var timeOff = new
            Date().getTimezoneOffset() * 60000;
        var today = new Date(nowDate - timeOff).toISOString().split("T")[0];
        document.getElementById("Date").setAttribute("max", today);
    }

    // 이름, 이메일, 비밀번호, 비밀번호, 전화번호 확인
    const [name, setName] = useState({ username: "" });
    const [email, setEmail] = useState({ usermail: "" })
    const [pass, setPassword] = useState({ userpass: "" })
    const [passck, setPasswordConfirm] = useState({ userpassck: "" })
    const [phone, setPhone] = useState({ userphone: "" })

    // 오류메시지 상태저장
    const [nameMessage, setNameMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')

    // 유효성 검사
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isPhone, setIsPhone] = useState(false)

    // 이름
    const onChangeName = (e) => {
        const { name, value } = e.target;
        setName({
            ...name,
            [name]: value
        })
        if (e.target.value.length < 2 || e.target.value.length > 20) {
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
        const { name, value } = e.target;
        setEmail({
            ...name,
            [name]: value
        })

        // 중복체크
        axios.get(`${API_URL}/emailCk/${email.usermail}`)
            .then(res => {
                if (!emailRegex.test(value)) {
                    setEmailMessage('이메일 형식이 틀렸습니다.')
                    setIsEmail(false)
                } else if (res.data.length !== 0) {
                    setEmailMessage('이미 존재하는 이메일입니다.')
                    setIsEmail(false)
                } else {
                    setEmailMessage('올바른 이메일 형식입니다. (사용가능)')
                    setIsEmail(true)
                }
            })
            .catch(e => {
            })
    }

    // 비밀번호
    const onChangePass = (e) => {
        const passRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const { name, value } = e.target;
        setPassword({
            ...name,
            [name]: value
        })
        // console.log(pass.userpass);
        if (!passRegex.test(value)) {
            setPasswordMessage('숫자/영문자/특수문자를 조합하여 8자리 이상 입력하세요.')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호입니다.')
            setIsPassword(true)
        }
    }

    // 비밀번호 확인
    const onChangePassCk = (e) => {
        const { name, value } = e.target;
        setPasswordConfirm({
            ...name,
            [name]: value
        })
        if (pass.userpass === value) {
            setPasswordConfirmMessage('비밀번호 확인 완료')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 같지 않습니다.')
            setIsPasswordConfirm(false)
        }
    }

    // 전화번호
    const onChangePhone = (e) => {
        const { name, value } = e.target;
        setPhone({
            ...name,
            [name]: value
        })
        if (isNaN(e.target.value)) {
            setPhoneMessage('전화번호는 숫자만 입력해주세요.');
            setIsPhone(false);
        } else if (e.target.value.length < 11 || e.target.value.length > 11) {
            setPhoneMessage('전화번호를 바르게 입력해주세요.');
            setIsPhone(false);
        } else {
            setPhoneMessage('올바른 전화번호 형식입니다.');
            setIsPhone(true);
        }
    }

    useEffect(() => {
        dateCheck();
    }, [])

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
                        <tr id='name'>
                            <th>Name</th>
                            <td>
                                <input
                                    name="username" type="text"
                                    value={name.username}
                                    onChange={onChangeName}
                                    required></input>
                                {
                                    name.username.length > 0 &&
                                    <p className={`${isName ? 'success' : 'error'}`}>{nameMessage}</p>
                                }
                            </td>
                        </tr>
                        <tr id='mail'>
                            <th>Email</th>
                            <td>
                                <input
                                    name="usermail" type="text"
                                    value={email.usermail}
                                    onChange={onChangeEmail}
                                    id="usermail"
                                    required></input>
                                {
                                    email.usermail.length > 0 &&
                                    <p className={`${isEmail ? 'success' : 'error'}`}>{emailMessage}</p>
                                }
                            </td>
                        </tr>
                        <tr id='pass'>
                            <th>Password</th>
                            <td>
                                <input type="password" placeholder='영문자/숫자/특수문자 조합하여 8자 이상'
                                    name="userpass"
                                    value={pass.userpass}
                                    onChange={onChangePass}
                                    required></input>
                                {
                                    pass.userpass.length > 0 &&
                                    <p className={`${isPassword ? 'success' : 'error'}`}>{passwordMessage}</p>
                                }
                            </td>
                        </tr>
                        <tr id='passCk'>
                            <th>Password 확인</th>
                            <td>
                                <input type="password"
                                    name="userpassck" placeholder='비밀번호를 한 번 더 입력해주세요.'
                                    value={passck.userpassck}
                                    onChange={onChangePassCk}
                                    required></input>
                                {
                                    passck.userpassck.length > 0 &&
                                    <p className={`${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</p>
                                }
                            </td>
                        </tr>
                        <tr id='joinData'>
                            <th>Date of Birth</th>
                            <td>
                                <input type="date" id='Date'
                                    name="userbirth"
                                    value={formData.userbirth}
                                    onChange={onChange}
                                    required></input>
                            </td>
                        </tr>
                        <tr id='joinPhone'>
                            <th>Phone Number</th>
                            <td>
                                <input
                                    name="userphone" type="text"
                                    value={phone.userphone}
                                    placeholder="숫자만 입력해주세요."
                                    onChange={onChangePhone}
                                    required></input>
                                {
                                    phone.userphone.length > 0 &&
                                    <p className={`${isPhone ? 'success' : 'error'}`}>{phoneMessage}</p>
                                }
                            </td>
                        </tr>
                        <tr id='joinAdd'>
                            <th>Address</th>
                            <td>
                                <input
                                    name="my_add1" type="text"
                                    value={formData.my_add1}
                                    onChange={onChange}
                                    placeholder='주소를 입력해주세요.'
                                    required></input>
                                <input
                                    name="my_add2" type="text"
                                    value={formData.my_add2}
                                    onChange={onChange} required
                                    placeholder='상세주소를 입력해주세요.'
                                ></input>
                                <span id='addBtn' type='button' onClick={openPostCode}>우편번호검색</span>
                                <div id='popupDom'>
                                    {
                                        isPopupOpen && (
                                            <PopupDom>
                                                <PopupPostCode
                                                    onClose={closePostCode}
                                                    onAddData={onAddData}
                                                >
                                                </PopupPostCode>
                                            </PopupDom>
                                        )
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr id='gender'>
                            <th>Gender</th>
                            <td>
                                남성 <input type="radio"
                                    name="gender"
                                    value="남성" required
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
                                    value="동의" required
                                    onChange={onChange}></input>

                                비동의 <input type="radio"
                                    name="usersms"
                                    value="비동의"
                                    onChange={onChange}></input>
                            </td>
                        </tr>
                    </table>
                    <div id='joinBtn'>
                        <button
                            // 버튼 비활성화
                            disabled={!(isName && isEmail && isPassword && isPasswordConfirm && isPhone)}
                        >Join Us</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;