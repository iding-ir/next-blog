import { SET_DATA, DELETE } from "../constants";
import { IAction } from "../actions/data";

export interface IStateData {
  current: any;
}

const initialState: IStateData = {
  current: [],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_DATA:
      return { current: action.payload };
    case DELETE:
      const current = state.current.filter((item: any) => {
        return item.id !== action.payload;
      });

      return { current };
    default:
      return state;
  }
};

export default reducer;
