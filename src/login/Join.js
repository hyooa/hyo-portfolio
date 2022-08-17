import React from 'react';
import './join.scss';

const Join = () => {
    return (
        <div id='joinStyled'>
            <img src='./image/logo2.png' alt=''></img>
            <div id='joinText'>
                <h1>Welcome</h1>
                <h1>Create an account</h1>
            </div>
            <div id='join'>
                <form>
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>
                                <input></input>
                            </td>
                        </tr>
                        <tr id='mail'>
                            <th>Email</th>
                            <td>
                                <input></input>@<input></input>
                            </td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>
                                <input type="password" placeholder='8자 이상, 문자/숫자/기호 사용 가능'></input>
                            </td>
                        </tr>
                        <tr id='joinData'>
                            <th>Date of Birth</th>
                            <td>
                                <input type="date"></input>
                            </td>
                        </tr>
                        <tr id='joinPhone'>
                            <th>Phone Number</th>
                            <td>
                                <input></input> - <input></input> - <input></input>
                            </td>
                        </tr>
                        <tr id='joinAdd'>
                            <th>Address</th>
                            <td>
                                <input></input><input></input>
                                <button>우편번호검색</button>
                            </td>
                        </tr>
                        <tr id='joinBox'>
                            <th>SMS 수신 동의</th>
                            <td>
                                동의 <input type="checkbox"></input> 비동의 <input type="checkbox"></input>
                            </td>
                        </tr>
                    </table>
                    <div id='joinBtn'>
                        <button>Join Us</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;