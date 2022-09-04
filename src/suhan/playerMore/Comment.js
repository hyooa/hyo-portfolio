import React, {useState} from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { getCookie } from '../../util/cookie';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import FanText from './FanText';

const Comment = ({playerDate}) => {
    // console.log(playerDate);
    // console.log(playerDate.name);

    const [fan, setFan] = useState({
        id : getCookie("username"),
        email : getCookie("usermail"),
        comment : "",
        player : playerDate.name,
    })
    // console.log(fan);

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
            <FanText playerDate={playerDate}/>
        </div>
    );
};

export default Comment;