import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyCus } from '../../modules/mypage';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const HostCus = () => {

    const { data, loading, error } = useSelector(state=>state.myPage.mycus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyCus())
    }, [dispatch])
    if (loading) return;
    if (error) return <div>에러</div>;
    if (!data) return <div>값 없음</div>;
    // console.log(data);

    const num = data.filter(cus=>cus.no);
    // console.log(num.length);

    function hostCusDelete(no) {
        axios.post(`${API_URL}/hostCusDelete/${no}`)
        .then(result=> {

        })
        .catch(e => {

        })
    }

    const onDelete = (e) => {
        if(window.confirm("회원을 탈퇴 시키시겠습니까 ?\n삭제된 데이터는 복구할 수 없습니다.")) {
        e.preventDefault();
        const no = e.target.className;
        // console.log(no);
        hostCusDelete(no);
        alert("회원 탈퇴 완료되었습니다.");
        document.location.href = document.location.href
    }}

    return (
        <>
            <div id='hostName'>
                <div><span>*</span>이름으로 오름차순 정렬함 (관리자 상단고정)</div>
                <div>총 회원 수 <span>{num.length}</span>명</div>
            </div>
            <form id='hostCusForm'>
                <table>
                    <tr>
                        <td>NAME</td>
                        <td>성별</td>
                        <td>Email</td>
                        <td>Date of Birth</td>
                        <td>Phone Number</td>
                        <td>Address</td>
                        <td>SMS 수신 동의</td>
                        <td>가입일</td>
                        <td>탈퇴</td>
                    </tr>
                    {data.map((data) => {
                        const originDate = data.userbirth.slice(0,10);
                        const date2 = new Date(originDate);
                        date2.setDate(date2.getDate()+1);
                        const settingDate = date2.toLocaleDateString();
                        // console.log(settingDate);

                        if(data.usermail === 'hyoyoung123@naver.com')
                        return <tr className='remove'>
                            <td>{data.username}</td>
                            <td>{data.gender}</td>
                            <td>{data.usermail}</td>
                            <td>{settingDate}</td>
                            <td>{data.userphone}</td>
                            <td>{data.useradd}</td>
                            <td>{data.usersms}</td>
                            <td>{data.userdate}</td>
                            <td><button onClick={onDelete} className={`${data.no}`}>삭제</button></td>
                            {/* <MdDelete size='20'></MdDelete> */}
                        </tr>
                    })}
                    {data.map((data) => {
                        const originDate = data.userbirth.slice(0,10);
                        const date2 = new Date(originDate);
                        date2.setDate(date2.getDate()+1);
                        const settingDate = date2.toLocaleDateString();
                        // console.log(settingDate);

                        if(data.usermail !== 'hyoyoung123@naver.com')
                        return <tr className='remove'>
                            <td>{data.username}</td>
                            <td>{data.gender}</td>
                            <td>{data.usermail}</td>
                            <td>{settingDate}</td>
                            <td>{data.userphone}</td>
                            <td>{data.useradd}</td>
                            <td>{data.usersms}</td>
                            <td>{data.userdate}</td>
                            <td><button onClick={onDelete} className={`${data.no}`}>삭제</button></td>
                            {/* <MdDelete size='20'></MdDelete> */}
                        </tr>
                    })}
                </table>
            </form>
        </>
    );
};

export default HostCus;