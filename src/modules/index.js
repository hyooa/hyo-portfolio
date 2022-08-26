import { combineReducers } from "redux";
import logincookie from "./logincookie";
import myPage from "./mypage";
import myPlayers from "./player";
import myTicket from "./match";

// 💛 여러개 reducer 합치기
const rootReducer = combineReducers({ 
    logincookie,
    myPage,
    myPlayers,
    myTicket
});

export default rootReducer;