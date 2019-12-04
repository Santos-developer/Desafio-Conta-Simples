const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
      return state;
    default:
      return state;
  }
};
