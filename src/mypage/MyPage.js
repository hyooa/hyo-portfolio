import React, { useEffect } from 'react';
import './myPage.scss';
import { getMyPage } from '../modules/mypage';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../util/cookie';

const MyPage = () => {

    const no = getCookie("usermail");
    const {data, loading, error} = useSelector(state=>state.myPage.mypage);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyPage(no))
    }, [dispatch])

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;

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
                                    <td>{data.username}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{data.usermail}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>{data.userphone}</td>
                                </tr>
                                <tr id='add'>
                                    <td>Address</td>
                                    <td>{data.useradd}</td>
                                </tr>
                                <tr>
                                    <td>SMS 수신 동의</td>
                                    <td></td>
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
                                <div>
                                    <input type='checkbox' id='c1'></input>
                                    <label for='ci'><span></span>전체선택</label>
                                </div>
                                <div>
                                    <p><span>0</span>개를 선택하셨습니다.</p>
                                </div>
                            </div>
                            <div id='box'>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo/노팅엄.png' alt=''></img>
                                    <span>Nottingham Forest</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo/맨시티.png' alt=''></img>
                                    <span>Manchester United</span>
                                    <span>1장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo/웨스트햄.png' alt=''></img>
                                    <span>Reading</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo/노리치시티.png' alt=''></img>
                                    <span>Arsenal</span>
                                    <span>2장</span>
                                    <span>60,000</span>
                                </div>
                                <div>
                                    <input type='checkbox'></input>
                                    <img src='./image/logo.png' alt=''></img>
                                    <img src='./image/logo/토트넘.png' alt=''></img>
                                    <span>Tottenham Hotspur</span>
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