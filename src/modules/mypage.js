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
    },
    mycontact : {
        loading : false,
        data : null,
        error : null
    },
    myComment : {
        loading : false,
        data : null,
        error : null
    }
}

// 2. 액션타입 지정
    // 내 정보 조회
const GET_MYPAGE = "GET_MYPAGE";
const GET_MYPAGE_SUCCESS = "GET_MYPAGE_SUCCESS";
const GET_MYPAGE_ERROR = "GET_MYPAGE_ERROR";

    // 전체 회원 정보
const GET_MYCUS = "GET_MYCUS";
const GET_MYCUS_SUCCESS = "GET_MYCUS_SUCCESS";
const GET_MYCUS_ERROR = "GET_MYCUS_ERROR";

    // mypage 문의
const GET_CONTACT_MYPAGE = "GET_CONTACT_MYPAGE";
const GET_CONTACT_MYPAGE_SUCCESS = "GET_CONTACT_MYPAGE_SUCCESS";
const GET_CONTACT_MYPAGE_ERROR = "GET_CONTACT_MYPAGE_ERROR";

    // mypage 팬글
const GET_COMMENT_MYPAGE = "GET_COMMENT_MYPAGE";
const GET_COMMENT_MYPAGE_SUCCESS = "GET_COMMENT_MYPAGE_SUCCESS";
const GET_COMMENT_MYPAGE_ERROR = "GET_COMMENT_MYPAGE_ERROR";

// 3. 액션 생성 함수 정의
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

export const getMyPage = (no) => async dispatch => {
    dispatch({ type : GET_MYPAGE })
    try {
        const res = await axios.get(`${API_URL}/mypageCustomer/${no}`)
        const result = res.data;
        dispatch({ type : GET_MYPAGE_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_MYPAGE_ERROR, error : e })
    }
}

export const getMyCon = (id) => async dispatch => {
    dispatch({ type : GET_CONTACT_MYPAGE })
    try {
        const res = await axios.get(`${API_URL}/mypageContact/${id}`)
        const result = res.data;
        dispatch({ type : GET_CONTACT_MYPAGE_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_CONTACT_MYPAGE_ERROR, error : e })
    }
}

export const getMyComment = (id) => async dispatch => {
    dispatch({ type : GET_COMMENT_MYPAGE })
    try {
        const res = await axios.get(`${API_URL}/mypageComment/${id}`)
        const result = res.data;
        dispatch({ type : GET_COMMENT_MYPAGE_SUCCESS, result })
    }
    catch(e) {
        dispatch({ type : GET_COMMENT_MYPAGE_ERROR, error : e })
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

                        case GET_CONTACT_MYPAGE :
                            return {
                                ...state,
                                mycontact : {
                                    loading : true,
                                    data : null,
                                    error : null
                                }
                            }
                        case GET_CONTACT_MYPAGE_SUCCESS :
                            return {
                                ...state,
                                mycontact : {
                                    loading : false,
                                    data : action.result,
                                    error : null
                                }
                            }
                        case GET_CONTACT_MYPAGE_ERROR :
                            return {
                                ...state,
                                mycontact : {
                                    loading : false,
                                    data : null,
                                    error : action.error
                                }
                            }

                            case GET_COMMENT_MYPAGE :
                                return {
                                    ...state,
                                    myComment : {
                                        loading : true,
                                        data : null,
                                        error : null
                                    }
                                }
                            case GET_COMMENT_MYPAGE_SUCCESS :
                                return {
                                    ...state,
                                    myComment : {
                                        loading : false,
                                        data : action.result,
                                        error : null
                                    }
                                }
                            case GET_COMMENT_MYPAGE_ERROR :
                                return {
                                    ...state,
                                    myComment : {
                                        loading : false,
                                        data : null,
                                        error : action.error
                                    }
                                }
        default :
            return state;
    }
}
