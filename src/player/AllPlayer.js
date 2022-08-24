import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlayer } from '../modules/player';
import Player from './Player';

const AllPlayer = () => {
    const { data, loading, error } = useSelector(state => state.myPlayers.players);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlayer())
    }, [dispatch]);
    
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    return (
        <div>
            {/* <Player key={data.no} data={data}/> */}
        </div> 
    );
};

export default AllPlayer;