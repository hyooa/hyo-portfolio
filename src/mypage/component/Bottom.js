import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCon } from '../../modules/mypage';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Bottom = ({email}) => {

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
    
    var localTime = data[0].date;
    const now = localTime.slice(0,10);

    function deleteContact(no) {
        axios.post(`${API_URL}/mypageConDel/${no}`)
        .then(result => {

        })
        .catch(e => {

        })
    }

    const onDelete = (e) => {
        alert("문의글 삭제 완료되었습니다.");
        const no = e.target.value;
        console.log(no);
        // deleteContact();
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
                                <td><button onClick={onDelete}><MdDelete size='20'></MdDelete></button></td>
                            </tr>
                        )}
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Bottom;