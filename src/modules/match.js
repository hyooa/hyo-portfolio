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
    matchLimit : {
        loading : false,
        data : null,
        error : null
    },
    results : {
        loading : false,
        data : null,
        error : null
    }
}

// 2. 액션타입 지정
const GET_TICKET = "GET_TICKET";
const GET_TICKET_SUCCESS = "GET_TICKET_SUCCESS";
const GET_TICKET_ERROR = "GET_TICKET_ERROR";

const GET_LIMIT = "GET_LIMIT";
const GET_LIMIT_SUCCESS = "GET_LIMIT_SUCCESS";
const GET_LIMIT_ERROR = "GET_LIMIT_ERROR";

const GET_RESULT = "GET_RESULT";
const GET_RESULT_SUCCESS = "GET_RESULT_SUCCESS";
const GET_RESULT_ERROR = "GET_RESULT_ERROR";

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

export const getLImit = () => async dispatch => {
    dispatch({ type : GET_LIMIT })
    try {
        const res = await axios.get(`${API_URL}/matchLimit`)
        const result = res.data;
        dispatch({ type : GET_LIMIT_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_LIMIT_ERROR, error : e })
    }
}

export const getResult = () => async dispatch => {
    dispatch({ type : GET_RESULT })
    try {
        const res = await axios.get(`${API_URL}/results`)
        const result = res.data;
        dispatch({ type : GET_RESULT_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_RESULT_ERROR, error : e })
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

            case GET_LIMIT :
                return {
                    ...state,
                    matchLimit : {
                        loading: true,
                        data: null,
                        error: null
                    }
                }
            case GET_LIMIT_SUCCESS :
                return {
                    ...state,
                    matchLimit : {
                        loading: false,
                        data: action.result,
                        error: null
                    }
                }
            case GET_LIMIT_ERROR :
                return {
                    ...state,
                    matchLimit : {
                        loading: false,
                        data: null,
                        error: action.error,
                    }
                }

                case GET_RESULT :
                    return {
                        ...state,
                        results : {
                            loading: true,
                            data: null,
                            error: null
                        }
                    }
                case GET_RESULT_SUCCESS :
                    return {
                        ...state,
                        results : {
                            loading: false,
                            data: action.result,
                            error: null
                        }
                    }
                case GET_RESULT_ERROR :
                    return {
                        ...state,
                        results : {
                            loading: false,
                            data: null,
                            error: action.error,
                        }
                    }

        default :
            return state;
    }
}