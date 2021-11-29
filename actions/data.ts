import { SET_DATA, DELETE } from "../constants";

export interface IAction {
  type: string;
  payload: any;
}

export const setData = (data: any) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const deleteData = (id: string) => {
  return {
    type: DELETE,
    payload: id,
  };
};
