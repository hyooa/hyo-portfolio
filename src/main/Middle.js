import React, {useEffect} from 'react';
import './main.scss';
import Middle1 from './middles/Middle1';
import Middle2 from './middles/Middle2';
import Middle3 from './middles/Middle3';
import { useDispatch, useSelector } from 'react-redux';
import { getLImit } from '../modules/match';

const Middle = () => {

    const {data, loading, error} = useSelector(state=>state.myTicket.matchLimit);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLImit())
    }, [dispatch])
    
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;
    // console.log(data);

    return (
        <div>
            <Middle1></Middle1>
            <Middle2></Middle2>
            <Middle3 data={data}></Middle3>
        </div>
    );
};

export default Middle;