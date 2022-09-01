// 리덕스 모듈 만들기
// 1. 초기상태값 지정(선언)
// 2. 액션타입 지정
// 3. 액션 생성 함수 정의
// 4. 리듀서 선언

import axios from "axios";
import { API_URL } from "../config/contansts";

// 1. 초기상태값 지정(선언)
const initialState = {
    mypage : {
        loading : false,
        data : null,
        error : null
    },
    mycus : {
        loading : false,
        data : null,
        error : null
    }
}

// 2. 액션타입 지정
const GET_MYPAGE = "GET_MYPAGE";
const GET_MYPAGE_SUCCESS = "GET_MYPAGE_SUCCESS";
const GET_MYPAGE_ERROR = "GET_MYPAGE_ERROR";

const GET_MYCUS = "GET_MYCUS";
const GET_MYCUS_SUCCESS = "GET_MYCUS_SUCCESS";
const GET_MYCUS_ERROR = "GET_MYCUS_ERROR";

// 3. 액션 생성 함수 정의
export const getMyPage = (no) => async dispatch => {
    dispatch({ type : GET_MYPAGE })
    try {
        const res = await axios.get(`${API_URL}/mypage/${no}`)
        const result = res.data;
        dispatch({ type : GET_MYPAGE_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_MYPAGE_ERROR, error : e })
    }
}

export const getMyCus = () => async dispatch => {
    dispatch({ type : GET_MYCUS })
    try {
        const res = await axios.get(`${API_URL}/host`)
        const result = res.data;
        dispatch({ type : GET_MYCUS_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_MYCUS_ERROR, error : e })
    }
}

// 4. 리듀서 선언
export default function myPage(state = initialState, action) {
    switch(action.type) {
        case GET_MYPAGE :
            return {
                ...state,
                mypage : {
                    loading: true,
                    data: null,
                    error: null
                }
            }
            case GET_MYPAGE_SUCCESS :
                return {
                    ...state,
                    mypage : {
                        loading: false,
                        data: action.result,
                        error: null
                    }
                }
            case GET_MYPAGE_ERROR :
                return {
                    ...state,
                    mypage : {
                        loading: false,
                        data: null,
                        error: action.error,
                    }
                }

                case GET_MYCUS :
                    return {
                        ...state,
                        mycus : {
                            loading: true,
                            data: null,
                            error: null
                        }
                    }
                    case GET_MYCUS_SUCCESS :
                        return {
                            ...state,
                            mycus : {
                                loading: false,
                                data: action.result,
                                error: null
                            }
                        }
                    case GET_MYCUS_ERROR :
                        return {
                            ...state,
                            mycus : {
                                loading: false,
                                data: null,
                                error: action.error,
                            }
                        }
        default :
            return state;
    }
}
