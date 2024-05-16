import Axios from "axios";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const signup = (username, email, password) => async dispatch => {
    try {
      const response = await Axios.post("http://localhost:4000/auth/signup", {
        username,
        email,
        password,
      });
      if (response.data.status) {
        dispatch({ type: SIGNUP_SUCCESS });
      } else {
        dispatch({ type: SIGNUP_FAILURE });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGNUP_FAILURE });
    }
  };
export const login = (email, password) => async dispatch => {
  try {
    const response = await Axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });
    if (response.data.status) {
      dispatch({ type: LOGIN_SUCCESS });
    } else {
      dispatch({ type: LOGIN_FAILURE });
      window.alert("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};