// 리덕스 모듈 만들기
// 1. 초기상태값 지정(선언)
// 2. 액션타입 지정
// 3. 액션 생성 함수 정의
// 4. 리듀서 선언

import axios from "axios";
import { API_URL } from "../config/contansts";

const initialState = {
    con : {
        loading : false,
        data : null,
        error : null
    },
}

const GET_CONTACT = "GET_CONTACT";
const GET_CONTACT_SUCCESS = "GET_CONTACT_SUCCESS";
const GET_CONTACT_ERROR = "GET_CONTACT_ERROR";

export const getCon = () => async dispatch => {
    dispatch({ type : GET_CONTACT })
    try {
        const res = await axios.get(`${API_URL}/contact`)
        const result = res.data;
        dispatch({ type : GET_CONTACT_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_CONTACT_ERROR, error : e })
    }
}

export default function myContactUs(state = initialState, action) {
    switch(action.type) {
        case GET_CONTACT :
            return {
                ...state,
                con : {
                    loading : true,
                    data : null,
                    error : null
                }
            }
        case GET_CONTACT_SUCCESS :
            return {
                ...state,
                con : {
                    loading : false,
                    data : action.result,
                    error : null
                }
            }
        case GET_CONTACT_ERROR :
            return {
                ...state,
                con : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            }
        default :
        return state;
    }
}