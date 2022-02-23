import { combineReducers } from "redux";

import gifReducer from "./gif/gif-reducer";

const rootReducer = combineReducers({
  gif: gifReducer
});

export default rootReducer;
