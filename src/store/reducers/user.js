const INITIAL_STATE = {
  name: "",
  picture: "",
  digit: "",
  agency: "",
  total: 0,
  rentability: 0,
  entries: 0,
  transactions: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.user };
    default:
      return state;
  }
};
