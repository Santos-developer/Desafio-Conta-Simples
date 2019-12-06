import { SET_USER, REMOVE_USER, SET_TOKEN } from "../actions/actionTypes";

const INITIAL_STATE = {
  name: "",
  picture: "",
  digit: "",
  agency: "",
  total: 0,
  rentability: 0,
  entries: 0,
  transactions: [],
  notifications: [],
  token: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    case REMOVE_USER:
      return { ...INITIAL_STATE };
    case SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
