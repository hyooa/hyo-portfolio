// 리덕스 모듈 만들기
// 1. 초기상태값 지정(선언)
// 2. 액션타입 지정
// 3. 액션 생성 함수 정의
// 4. 리듀서 선언

import axios from "axios";
import { API_URL } from "../config/contansts";

const initialState = {
    fans : {
        loading : false,
        data : null,
        error : null
    }
}

const FAN = "FAN";
const FAN_SUCCESS = "FAN_SUCCESS";
const FAN_ERROR = "FAN_ERROR";

export const getFan = (player) => async dispatch => {
    dispatch({ type : FAN })
    try {
        const res = await axios.get(`${API_URL}/playerMorefan/${player}`)
        const result = res.data;
        dispatch({ type : FAN_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : FAN_ERROR, error : e })
    }
}

export default function myFan(state = initialState, action) {
    switch(action.type) {
        case FAN :
            return {
                ...state,
                fans : {
                    loading : true,
                    data : null,
                    error : null
                }
            }
        case FAN_SUCCESS :
            return {
                ...state,
                fans : {
                    loading : false,
                    data : action.result,
                    error : null
                }
            }
        case FAN_ERROR :
            return {
                ...state,
                fans : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            }
        default :
        return state;
    }
}