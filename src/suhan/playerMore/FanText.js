import React, {useEffect} from 'react';
import { IoIosHeart } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getFan } from '../../modules/fan';
import { API_URL } from '../../config/contansts';
import axios from 'axios';
import { getCookie } from '../../util/cookie';

const FanText = ({playerDate}) => {
    // console.log(playerDate);
    const name = playerDate.name;
    // console.log(name);
        const {data, loading, error} = useSelector(state=>state.myFan.fans);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getFan(name))
        }, [dispatch, name])
        // console.log(data);
        // console.log(name);
        if(loading) return <div>로딩중</div>;
        if(error) return <div>에러</div>;
        if(!data) return <div>값 없음</div>;
        // console.log(data);

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
            // console.log(no);
            deleteComment(no);
            alert("팬글 삭제 완료되었습니다.");
            document.location.href = document.location.href
        }

        const userDate = getCookie("usermail");
        // console.log(userDate);

    return (
        <div id='fanText'>
            {data.map((data) => 
                <div>
                    <div>
                        <div>
                            <IoIosHeart size='25'></IoIosHeart>
                        </div>
                        <div>{data.like}좋아요 수</div>
                    </div>
                    <div>{data.id}</div>
                    <div className='text'>{data.comment}</div>
                    {
                        (userDate === data.email || userDate === 'hyoyoung123@naver.com') &&
                        <div id='remove' onClick={onDelete} className={`${data.no}`}>삭제</div>
                    }
                    {
                        userDate !== data.email &&
                        <div></div>
                    }
                    {/* <MdDelete size='20'></MdDelete> */}
                </div>
            )}

    </div>
    );
};

export default FanText;