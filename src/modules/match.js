// 리덕스 모듈 만들기
// 1. 초기상태값 지정(선언)
// 2. 액션타입 지정
// 3. 액션 생성 함수 정의
// 4. 리듀서 선언

import axios from "axios";
import { API_URL } from "../config/contansts";

// 1. 초기상태값 지정(선언)
const initialState = {
    ticket : {
        loading : false,
        data : null,
        error : null
    },
    ticketMonth : {
        loading : false,
        data : null,
        error : null
    }
}

// 2. 액션타입 지정
const GET_TICKET = "GET_TICKET";
const GET_TICKET_SUCCESS = "GET_TICKET_SUCCESS";
const GET_TICKET_ERROR = "GET_TICKET_ERROR";

const GET_MONTH = "GET_MONTH";
const GET_MONTH_SUCCESS = "GET_MONTH_SUCCESS";
const GET_MONTH_ERROR = "GET_MONTH_ERROR";

// 3. 액션 생성 함수 정의
export const getTicket = () => async dispatch => {
    dispatch({ type : GET_TICKET })
    try {
        const res = await axios.get(`${API_URL}/match`)
        const result = res.data;
        dispatch({ type : GET_TICKET_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_TICKET_ERROR, error : e })
    }
}

export const getTicketMonth = (month) => async dispatch => {
    dispatch({ type : GET_MONTH })
    try {
        const res = await axios.get(`${API_URL}/matchMonth/${month}`)
        const result = res.data;
        dispatch({ type : GET_MONTH_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_MONTH_ERROR, error : e })
    }
}

// 4. 리듀서 선언
export default function myTicket(state = initialState, action) {
    switch(action.type) {
        case GET_TICKET :
            return {
                ...state,
                ticket : {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_TICKET_SUCCESS :
            return {
                ...state,
                ticket : {
                    loading: false,
                    data: action.result,
                    error: null
                }
            }
        case GET_TICKET_ERROR :
            return {
                ...state,
                ticket : {
                    loading: false,
                    data: null,
                    error: action.error,
                }
            }

            case GET_MONTH :
                return {
                    ...state,
                    ticketMonth : {
                        loading: true,
                        data: null,
                        error: null
                    }
                }
            case GET_MONTH_SUCCESS :
                return {
                    ...state,
                    ticketMonth : {
                        loading: false,
                        data: action.result,
                        error: null
                    }
                }
            case GET_MONTH_ERROR :
                return {
                    ...state,
                    ticketMonth : {
                        loading: false,
                        data: null,
                        error: action.error,
                    }
                }
        default :
            return state;
    }
}