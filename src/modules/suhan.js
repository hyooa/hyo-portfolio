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
    },
    playerMore : {
        loading : false,
        data : null,
        error : null
    }
}

// 2. 액션타입 지정
const GET = "GET";
const GET_SUCCESS = "GET_SUCCESS";
const GET_ERROR = "GET_ERROR";

const GET_MORE = "GET_MORE";
const GET_MORE_SUCCESS = "GET_MORE_SUCCESS";
const GET_MORE_ERROR = "GET_MORE_ERROR";

// 3. 액션 생성 함수 정의
export const getAa = () => async dispatch => {
    dispatch({ type : GET })
    try {
        const res = await axios.get(`${API_URL}/suhan`)
        const result = res.data;
        dispatch({ type : GET_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_ERROR, error : e })
    }
}

export const getMore = (name) => async dispatch => {
    dispatch({ type : GET_MORE })
    try {
        const res = await axios.get(`${API_URL}/playerMore/${name}`)
        const result = res.data;
        dispatch({ type : GET_MORE_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_MORE_ERROR, error : e })
        console.log("에러");
    }
}

// 4. 리듀서 선언
export default function my(state = initialState, action) {
    switch(action.type) {
        case GET :
            return {
                ...state,
                players : {
                    loading : true,
                    data : null,
                    error : null
                }
            }
        case GET_SUCCESS :
            return {
                ...state,
                players : {
                    loading : false,
                    data : action.result,
                    error : null
                }
            }
        case GET_ERROR :
            return {
                ...state,
                players : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            }

            case GET_MORE :
                return {
                    ...state,
                    players : {
                        loading : true,
                        data : null,
                        error : null
                    }
                }
            case GET_MORE_SUCCESS :
                return {
                    ...state,
                    players : {
                        loading : false,
                        data : action.result,
                        error : null
                    }
                }
            case GET_MORE_ERROR :
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