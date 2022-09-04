import axios from 'axios';
import React, { useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config/contansts';
import { getMyCon } from '../../modules/contactus';
import { getMyComment } from '../../modules/mypage';
import { getCookie } from '../../util/cookie';

const MyCommet = ({email}) => {

    const {data, loading, error} = useSelector(state=>state.myPage.myComment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyComment(email))
    }, [dispatch, email])
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    // console.log(data);
    // console.log(email);

    function deleteComment(no) {
        axios.post(`${API_URL}/mypageComDel/${no}`)
        .then(result=> {

        })
        .catch(e => {

        })
    }
    const onDelete = (e) => {
        e.preventDefault();
        const no = e.target.className;
        deleteComment(no);
        alert("팬글 삭제 완료되었습니다.");
            document.location.href = document.location.href
    }

    return (
        <div id='myCommet'>
            <div>
                <h2>내 Commet</h2>
                <form>
                    <table>
                        <tr>
                            <td>no</td>
                            <td>하트</td>
                            <td>선수</td>
                            <td>내용</td>
                            <td>삭제</td>
                        </tr>
                        {data.map((data, index) =>
                            <tr className='remove' key={index}>
                                <td>{index+1}</td>
                                <td>{data.like}</td>
                                <td>{data.player}</td>
                                <td>{data.comment}</td>
                                <td><button onClick={onDelete} className={`${data.no}`}>삭제</button></td>
                                {/* <MdDelete size='20'></MdDelete> */}
                            </tr>
                        )}
                    </table>
                </form>
            </div>
        </div>
    );
};

export default MyCommet;