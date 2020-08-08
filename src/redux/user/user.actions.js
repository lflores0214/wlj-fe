import UserActionTypes from "./user.types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const logInStart = () => ({
  type: UserActionTypes.LOG_IN_START,
});

const logInSuccess = () => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
});

const logInFailure = (error) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: error,
});
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const userLogIn = (userInfo) => (dispatch) => {
  dispatch(logInStart);
  axiosWithAuth()
    .post(
      "https://weightliftingjournal1.herokuapp.com/api/auth/login",
      userInfo
    )
    .then((response) => {
      dispatch(logInSuccess());
      dispatch(setCurrentUser({id: response.data.id, username: response.data.username}));
      dispatch(setIsLoading(false));
      dispatch(setIsLoggedIn(true))
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      dispatch(logInFailure(error.message));
      dispatch(setIsLoading(false))
      console.error(error.message);
    });
};

export const setIsLoggedIn = (bool) => ({
  type: UserActionTypes.SET_IS_LOGGED_IN,
  payload: bool,
});
export const setIsLoading = (bool) => ({
  type: UserActionTypes.SET_IS_LOADING,
  payload: bool,
});

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
