import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAa } from '../modules/suhan';
import PlayerPhoto from './components/PlayerPhoto';
import "./suhan.scss";


const Suhan = () => {
    const [player, setPlayer] = useState("Kepa Arrizabalaga"); //클릭한 선수 이름!!!!! 초기값은 빈값 // 문제 ) 초기값이 없어서 error

    const onClick = (e)=>{
        // console.log(e.target.className);
        setPlayer(e.target.className) //클릭하면 선수이름을 player라는 변수에 담아줌
    }
    // console.log(player);

    const { data, loading, error } = useSelector(state=>state.my.players);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAa())
    }, [dispatch])
    
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    
    // console.log(data);

    const name = [...new Set(data.map(name => name.name))]
    // console.log(name);
   
    return (
        <div id='player'>
            <PlayerPhoto data={data} state={player}/>

            <div id='player_right'>
                {name.map((name) => 
                    <ul id='name'>
                        <li onClick={onClick} className={`${name}`}>{name}</li>
                        <img src='' alt=''></img>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Suhan;