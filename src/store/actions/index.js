import { SET_USER, REMOVE_USER, SET_TOKEN } from "./actionTypes";

export const setUser = user => ({
  type: SET_USER,
  user
});

export const removeUser = () => ({
  type: REMOVE_USER
})

export const setToken = token => ({
  type: SET_TOKEN,
  token
});
