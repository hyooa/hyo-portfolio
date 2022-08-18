import { combineReducers } from "redux";
import logincookie from "./logincookie";

// 💛 여러개 reducer 합치기
const rootReducer = combineReducers({ logincookie });

export default rootReducer;