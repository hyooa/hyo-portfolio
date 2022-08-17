import React from 'react';
import styled from 'styled-components';

const LoginStyled = styled.div `
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
const LoginTable = styled.table `
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
const LoginInput = styled.input `
    outline: none;
    border: 1px solid #333;
    background: none;
    margin: 30px 0;
    width: 600px;
    height: 70px;
    font-size: 16px;
    text-align: center;
`;
const FanName = styled.div `
    padding: 50px 0;
    h1 {
        font-size: 140px;
    }
`;
const LoginBtn = styled.div `
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

const Login = () => {
    return (
        <LoginStyled>
            <img src='./image/logo2.png' alt=''></img>
            <FanName>
                <h1>Hello Blues</h1>
            </FanName>
            <div id='login'>
                <form>
                    <LoginTable>
                        <tr>
                            <th>Email</th>
                            <LoginInput></LoginInput>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <LoginInput type="password"></LoginInput>
                        </tr>
                    </LoginTable>
                    <LoginBtn>
                        <div id='loginDiv'>
                            <button><a href='/'>Login</a></button>
                        </div>
                        <div id='loginDiv'>
                            <button><a href='join'>Join Us</a></button>
                        </div>
                    </LoginBtn>
                </form>
            </div>
        </LoginStyled>
    );
};

export default Login;