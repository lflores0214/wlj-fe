import UserActionTypes from "./user.types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const logInStart = (userInfo) => ({
  type: UserActionTypes.LOG_IN_START,
  payload: userInfo,
});

const logInSuccess = (userName) => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
  payload: userName,
});

const logInFailure = (error) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: error,
});

export const userLogIn = (userInfo) => (dispatch) => {
  dispatch({ type: logInStart, payload: userInfo });
  axiosWithAuth()
    .post(
      "https://weightliftingjournal1.herokuapp.com/api/auth/login",
      userInfo
    )
    .then((response) => {
      dispatch({
        type: logInSuccess,
        payload: { username: response.data.username, id: response.data.id },
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      dispatch({ type: logInFailure, payload: error });
      console.error(error.message);
    });
};

export const registerStart = (user) => ({
  type: UserActionTypes.REGISTER_START,
  payload: user,
});

export const registerSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.REGISTER_SUCCESS,
  payload: { user, additionalData },
});

export const registerFailure = (error) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: error,
});
