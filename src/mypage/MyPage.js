import React from 'react';
import './myPage.scss';

const MyPage = () => {
    return (
        <div id='mypage'>
            <h1><span>My</span>Page</h1>
            <div>
                <div id='info'>
                    <div>
                        <h2>회원정보</h2>
                        <form>
                            <table>
                                <tr>
                                    <td>NAME</td>
                                    <td>권효영</td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>hyoyoung</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>2022.02.02</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>010.0000.0000</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>울산 남구 그린컴퓨터</td>
                                </tr>
                                <tr>
                                    <td>SMS 수신 동의</td>
                                    <td>동의</td>
                                </tr>
                            </table>
                            <div id='btn'>
                                <button>수정하기</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id='basket'>
                    <div>
                        <h2>장바구니</h2>
                        <div>
                            <div id='all'>
                                <input type='checkbox' id='c1'></input>
                                <label for='ci'><span></span>전체선택</label>
                            </div>
                            <div id='box'>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                            </div>
                            <div id='total'>
                                <p>주문금액 : 000,000원</p>
                            </div>
                            <div id='btn'>
                                <button>구매하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;