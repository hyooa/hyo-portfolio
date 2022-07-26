import axios from 'axios';
import React, { useState, useReducer } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config/contansts';
import { getMyEdit, getMyPage } from '../../modules/mypage';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const EditCus = ({ email }) => {

    // 팝업창 상태 관리
    const [isPopupOpen, setIspopupOpen] = useState(false);

    const onAddData = (data) => {
        setInputData({
            ...inputData,
            my_useradd: data.address
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

    const onClick = (e) => {
        document.querySelector('#editCus').style.display = 'none';
    }

    const { data, loading, error } = useSelector(state => state.myPage.mypage);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyPage(email))
    }, [dispatch, email])
    // console.log(data);
    // console.log(email);

    const [inputData, setInputData] = useState({
        my_username: "",
        my_useradd: "",
        my_userphone: "",
        my_userbirth: "",
        my_usersms: "",
        my_usermail: "",
        my_gender: ""
    })

    useEffect(() => {
        setInputData({
            my_username: data ? data.username : "",
            my_useradd: data ? data.useradd : "",
            my_userphone: data ? data.userphone : "",
            my_userbirth: data ? data.userbirth : "",
            my_usersms: data ? data.usersms : "",
            my_usermail: data ? data.usermail : "",
            my_gender: data ? data.gender : ""
        })
    }, [data])
    // console.log(data);

    // input값 수정될 수 있게
    const onChange = (e) => {
        const { name, value } = e.target;
        // console.log(inputData);
        // console.log(value);
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    if (loading) return;
    if (error) return <div>에러</div>;
    if (!data) return <div>값 없음</div>;

    const no = data.no;
    // console.log(no);

    function Edit() {
        axios.put(`${API_URL}/editCustomer/${no}`, inputData)
            .then(res => {
                // console.log(res);
            })
            .catch(e => {
                // console.log(e);
            })
    }

    const onSubmit = (e) => {
        if (window.confirm('회원정보를 수정하시겠습니까 ?')) {
            e.preventDefault();
            Edit();
            alert("회원정보 수정이 완료되었습니다.");
            document.location.href = document.location.href
        }
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    }

    const originDate = data.userbirth.slice(0, 10);
    const date2 = new Date(originDate);
    date2.setDate(date2.getDate() + 1);
    const settingDate = date2.toLocaleDateString();
    // console.log(settingDate);

    return (
        <div id='editCus'>
            <div id='editBtn'>
                <button onClick={onClick}>X</button>
                <p>Close</p>
            </div>
            <div id='editInfo'>
                <h2>회원정보 수정하기</h2>
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <td>NAME</td>
                            <td><input onChange={onChange}
                                name='my_username'
                                defaultValue={data.username}
                                required></input></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input onChange={onChange}
                                name='my_usermail'
                                defaultValue={data.usermail}
                                required></input></td>
                        </tr>
                        <tr>
                            <td>
                                Date of Birth
                                <p>(수정시 yyyy-mm-dd 형식에<br></br>맞춰 수정바랍니다.)</p>
                            </td>
                            <td><input onChange={onChange}
                                name='my_userbirth' id='Date'
                                defaultValue={settingDate}
                                required></input></td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td><input onChange={onChange}
                                name='my_userphone'
                                defaultValue={data.userphone}
                                required></input></td>
                        </tr>
                        <tr id='add'>
                            <td>Address</td>
                            <td><input onChange={onChange}
                                name='my_useradd'
                                defaultValue={data.useradd}
                                // value={inputData.my_useradd}
                                required></input>
                                <span onClick={openPostCode}>우편번호검색</span></td>
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
                        </tr>
                        <tr id='idgenter'>
                            <td>성별</td>
                            <td>
                                남성<input onChange={onChange}
                                    name='my_gender' type="radio"
                                    defaultValue="남성"
                                    checked={inputData.my_gender === "남성" ? true : false}></input>
                                여성<input onChange={onChange}
                                    name='my_gender' type="radio"
                                    defaultValue="여성"
                                    checked={inputData.my_gender === "여성" ? true : false}></input>
                            </td>
                        </tr>
                        <tr id='idsms'>
                            <td>SMS 수신 동의</td>
                            <td>
                                동의<input onChange={onChange}
                                    name='my_usersms' type="radio"
                                    defaultValue="동의"
                                    checked={inputData.my_usersms === "동의" ? true : false}></input>
                                비동의<input onChange={onChange}
                                    name='my_usersms' type="radio"
                                    defaultValue="비동의"
                                    checked={inputData.my_usersms === "비동의" ? true : false}></input>
                            </td>
                        </tr>
                    </table>
                    <div id='btn'>
                        <button type="submit">수정하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCus;