import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyCus } from '../../modules/mypage';
import { MdDelete } from 'react-icons/md';

const HostCus = () => {

    const { data, loading, error } = useSelector(state=>state.myPage.mycus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyCus())
    }, [dispatch])
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    // console.log(data);

    const num = data.filter(cus=>cus.no);
    // console.log(num.length);

    return (
        <>
            <div id='hostName'>
                <div><span>*</span>이름으로 오름차순 정렬함</div>
                <div>총 회원 수 <span>{num.length}</span>명</div>
            </div>
            <form id='hostCusForm'>
                <table>
                    <tr>
                        <td>NAME</td>
                        <td>Email</td>
                        <td>Date of Birth</td>
                        <td>Phone Number</td>
                        <td>Address</td>
                        <td>SMS 수신 동의</td>
                        <td>가입일</td>
                        <td>탈퇴</td>
                    </tr>
                    {data.map((data) => 
                        <tr className='remove'>
                            <td>{data.username}</td>
                            <td>{data.usermail}</td>
                            <td></td>
                            <td>{data.userphone}</td>
                            <td>{data.useradd}</td>
                            <td></td>
                            <td>{data.userdate}</td>
                            <td><button><MdDelete size='20'></MdDelete></button></td>
                        </tr>
                    )}
                </table>
            </form>
        </>
    );
};

export default HostCus;