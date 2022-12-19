import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config/contansts';
import { getResult } from '../../modules/match';
import { getCookie } from '../../util/cookie';

const Result = () => {

    const {data, loading, error} = useSelector(state=>state.myTicket.results);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getResult())
    }, [dispatch])
    if (loading) return;
    if (error) return <div>에러</div>;
    if (!data) return <div>값 없음</div>;
    console.log(data);
    
    const usermail = getCookie("usermail");

    return (
    <div id='result'>
        <div id='boxText'>Results</div>
        {
            usermail === 'hyoyoung123@naver.com' &&
            <div id='boxBtn'><button>결과 수정하기</button></div>
        }
        <div id='resultDiv'>
            <form>
                <table>
                    <tr>
                        <th>RK</th>
                        <th></th>
                        <th>TEAM</th>
                        <th>GAMES</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                    </tr>
                    {data.map(data => (
                        <tr>
                        <td>{data.rk}</td>
                        <td>
                            <img src={`${API_URL}/team/${data.teamlogo}`} alt=''></img>
                        </td>
                        <td>{data.team}</td>
                        <td>{data.games}</td>
                        <td>{data.won}</td>
                        <td>{data.draw}</td>
                        <td>{data.lost}</td>
                        </tr>
                    ))}
                </table>
            </form>
        </div>
    </div>
    );
};

export default Result;