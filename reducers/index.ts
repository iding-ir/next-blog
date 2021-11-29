import { combineReducers } from "redux";

import dataReducer, { IStateData } from "./data";

export interface IState {
  data: IStateData;
}

const combinedReducers = combineReducers({
  data: dataReducer,
});

export default combinedReducers;
