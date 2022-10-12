import React, { useEffect } from 'react';
import './myPage.scss';
import { getMyPage } from '../modules/mypage';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../util/cookie';
import Top from './component/Top';
import Bottom from './component/Bottom';
import MyCommet from './component/MyCommet';
import Basket from './component/Basket';
import EditCus from './component/EditCus';
import List from './component/List';
import Answer from './component/Answer';

const MyPage = () => {

    const email = getCookie("usermail");
    console.log(email);

    return (
        <div id='mypage'>
            <h1><span>My</span>Page</h1>
            <div>
                <div>
                    <Top email={email}/>
                    <List />
                    <EditCus email={email}/>
                </div>
                <div>
                    <Basket email={email}/>
                </div>
                <div id='mypageBto'>
                    <Bottom email={email}/>
                    <MyCommet email={email}/>
                </div>
                {
                    email === 'hyoyoung123@naver.com' &&
                    <div>
                        <Answer />
                    </div>
                }
            </div>
        </div>
    );
};

export default MyPage;