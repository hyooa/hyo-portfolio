import React from 'react';

const Basket = () => {
    return (
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
    );
};

export default Basket;