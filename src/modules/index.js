import { combineReducers } from "redux";
import logincookie from "./logincookie";
import myPage from "./mypage";
import myPlayers from "./player";

// 💛 여러개 reducer 합치기
const rootReducer = combineReducers({ 
    logincookie,
    myPage,
    myPlayers,
});

export default rootReducer;