import React, {useEffect, useState} from 'react';
import { IoIosHeart, IoIosAddCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { getCookie } from '../../util/cookie';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import { useDispatch, useSelector } from 'react-redux';
import { getFan } from '../../modules/fan';
import {  useParams } from 'react-router-dom';

const Comment = ({playerDate}) => {
    // console.log(playerDate);
    // console.log(playerDate.name);

    const [fan, setFan] = useState({
        id : getCookie("username"),
        comment : "",
        player : playerDate.name,
    })
    const onFan = (e) => {
        const {name, value} = e.target;
        setFan({
            ...fan,
            [name] : value,
        })
    }
    function fanInput() {
        axios.post(`${API_URL}/playerFan`, fan)
        .then(res => {
            // alert('팬글 등록이 완료되었습니다.');
        })
        .catch(e => {
            // alert('팬글 등록에 실패했습니다.');
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        fanInput();
        alert("팬글 등록이 완료되었습니다.");
        document.location.href = document.location.href;
    }
    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onSubmit();
        }
    }

    const {player} = useParams();
    const {data, loading, error} = useSelector(state=>state.myFan.fans);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFan(player))
    }, [dispatch, player])
    console.log(data);
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    console.log(data);

    return (
        <div id='comment'>
            <h3>Fan Comments</h3>
            <div id='fanInput'>
                { (getCookie("usermail")) ?
                <form onSubmit={onSubmit} onKeyPress={onKeyPress}>
                    <input 
                    onChange={onFan} required name='comment'
                    placeholder='입력해주세요.'></input>
                    <div>
                        <button>
                            <IoIosAddCircleOutline size='40'></IoIosAddCircleOutline>
                        </button>
                    </div>
                </form>
                :
                <a href='/login'><div id='fanLogin'>로그인 후 작성 가능합니다.</div></a>
                }
            </div>
            <div id='fanText'>
                <div>
                    <div>
                        <div>
                            <IoIosHeart size='25'></IoIosHeart>
                        </div>
                        <div>100</div>
                    </div>
                    <div>아이디</div>
                    <div className='text'>안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~</div>
                    <div className='remove'><MdDelete></MdDelete></div>
                </div>
            </div>
        </div>
    );
};

export default Comment;