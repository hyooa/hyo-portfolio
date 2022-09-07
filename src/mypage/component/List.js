import React from 'react';

const List = () => {

    
    // 날짜 지나면 자동으로 사라지게 해야됨 ...
    return (
        <div id='list'>
            <div>
                <h2>구매목록</h2>
                <div>
                    <div id='box'>
                        <div>
                            <img src='./image/logo.png' alt=''></img>
                            <img src='./image/logo.png' alt=''></img>
                            <span>Nottingham Forest</span>
                            <span>2장</span>
                            <span>60,000</span>
                            <button>반품</button>
                        </div>
                    </div>
                    <div id='total'>
                        <p>주문금액 : 000,000원</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;