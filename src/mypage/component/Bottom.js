import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCon } from '../../modules/mypage';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Bottom = ({email}) => {

    // 문제 ) 처음에 값이 없으면 에러 🚨🚨🚨 // 없을땐 없습니다라고 뜨게하기
    const {data, loading, error} = useSelector(state=>state.myPage.mycontact);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getMyCon(email))
    }, [dispatch, email])
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    // console.log(data);
    // console.log(username);
    
    // console.log(data[0].no);
    
    var localTime = data[0].date;
    const now = localTime.slice(0,10);

    const onDelete = (e) => {
        e.preventDefault();
        const eValue = e.target.value;
        deleteContact(eValue);
        console.log(e.target.value);
        // alert("문의글 삭제 완료되었습니다.");
        // document.location.href = document.location.href
    }

    function deleteContact(no) {
        axios.post(`${API_URL}/mypageConDel/${no}`)
        .then(result => {
            console.log(result+'result');
        })
        .catch(e => {
            console.log(e);
            // console.log(number+'e');
        })
        // console.log(number+'밖');
    }

    return (
        <div id='myUs'>
            <div>
                <h2>내 문의글</h2>
                <form>
                    <table>
                        <tr>
                            <td>no</td>
                            <td>제목</td>
                            <td>작성일</td>
                            <td>삭제</td>
                        </tr>
                        {data.map((data, index) => 
                            <tr className='remove' key={index}>
                                <td>{index+1}</td>
                                <td>{data.title}</td>
                                <td>{now}</td>
                                <td><button onClick={onDelete} value={data.no}><MdDelete size='20'></MdDelete></button></td>
                            </tr>
                        )}
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Bottom;