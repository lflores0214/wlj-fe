import UserActionTypes from "./user.types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { capitalizeFirstLetter } from "../../utils/utils";

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
export const setIsLoggedIn = (bool) => ({
  type: UserActionTypes.SET_IS_LOGGED_IN,
  payload: bool,
});
export const setIsLoading = (bool) => ({
  type: UserActionTypes.SET_IS_LOADING,
  payload: bool,
});
export const setToken = (token) => ({
  type: UserActionTypes.SET_TOKEN,
  payload: token,
});
export const userLogIn = (userInfo) => (dispatch) => {
  dispatch(logInStart);
  axiosWithAuth()
    .post(
      "https://weightliftingjournal1.herokuapp.com/api/auth/login",
      userInfo
    )
    .then((response) => {
      const username = capitalizeFirstLetter(response.data.username);
      const { token } = response.data;
      dispatch(logInSuccess());
      console.log(token);
      dispatch(setToken(token));
      dispatch(setCurrentUser({ id: response.data.id, username: username }));
      dispatch(setIsLoading(false));
      dispatch(setIsLoggedIn(true));
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(logInFailure(error.message));
      dispatch(setIsLoading(false));
      console.error(error.message);
    });
};

export const registerStart = () => ({
  type: UserActionTypes.REGISTER_START,
});

export const registerSuccess = () => ({
  type: UserActionTypes.REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: error,
});

export const registerUser = (userInfo) => (dispatch) => {
  dispatch(registerStart());
  axiosWithAuth()
    .post(
      "https://weightliftingjournal1.herokuapp.com/api/auth/register",
      userInfo
    )
    .then((response) => {
      dispatch(registerSuccess());
      setIsLoading(false);
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
};
