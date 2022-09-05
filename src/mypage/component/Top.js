import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPage } from '../../modules/mypage';
import EditCus from './EditCus';

const Top = ({email}) => {

    const {data, loading, error} = useSelector(state=>state.myPage.mypage);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getMyPage(email))
    }, [dispatch, email])
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    console.log(data);
    console.log(email);

    const originDate = data.userbirth.slice(0,10);
    const date2 = new Date(originDate);
    date2.setDate(date2.getDate()+1);
    // console.log(date2+'date2🚨');
    const settingDate = date2.toLocaleDateString();

    const onClick = (e) => {
        e.preventDefault();
        document.querySelector('#editCus').style.display = 'block';
    }

    return (
        <>
        {/* <EditCus  email={email}/> */}
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
                            <td>{settingDate}</td>
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
                            <td>성별</td>
                            <td>{data.gender}</td>
                        </tr>
                        <tr>
                            <td>SMS 수신 동의</td>
                            <td>{data.usersms}</td>
                        </tr>
                    </table>
                    <div id='btn'>
                        <button onClick={onClick}>수정하기</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Top;