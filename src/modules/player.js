// 리덕스 모듈 만들기
// 1. 초기상태값 지정(선언)
// 2. 액션타입 지정
// 3. 액션 생성 함수 정의
// 4. 리듀서 선언

import axios from "axios";
import { API_URL } from "../config/contansts";

// 1. 초기상태값 지정(선언)
const initialState = {
    players : {
        loading : false,
        data : null,
        error : null
    }
}

// 2. 액션타입 지정
const GET_PLAYERS = "GET_PLAYERS";
const GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS";
const GET_PLAYERS_ERROR = "GET_PLAYERS_ERROR";

// 3. 액션 생성 함수 정의
export const getPlayer = () => async dispatch => {
    dispatch({ type : GET_PLAYERS })
    try {
        const res = await axios.get(`${API_URL}/player`)
        const result = res.data;
        dispatch({ type : GET_PLAYERS_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_PLAYERS_ERROR, error : e })
    }
}

// 4. 리듀서 선언
export default function myPlayers(state = initialState, action) {
    switch(action.type) {
        case GET_PLAYERS :
            return {
                ...state,
                players : {
                    loading : true,
                    data : null,
                    error : null
                }
            }
        case GET_PLAYERS_SUCCESS :
            return {
                ...state,
                players : {
                    loading : false,
                    data : action.result,
                    error : null
                }
            }
        case GET_PLAYERS_ERROR :
            return {
                ...state,
                players : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            }
        default :
            return state;
    }
}