import React from 'react';


const Basket = () => {

    // 날짜 지나면 자동으로 사라지게 해야됨 ...
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
                            <p>선택항목 : <span>0</span>개</p>
                            <button>삭제</button>
                        </div>
                    </div>
                    <div id='box'>
                        <div>
                            <input type='checkbox'></input>
                            <img src='./image/logo.png' alt=''></img>
                            <img src='./image/logo.png' alt=''></img>
                            <span>Nottingham Forest</span>
                            <span>2장</span>
                            <span>60,000</span>
                            <button>삭제</button>
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