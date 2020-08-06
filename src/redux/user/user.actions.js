import UserActionTypes from "./user.types";

export const logInStart = (emailAndPassword) => ({
  type: UserActionTypes.LOG_IN_START,
  payload: emailAndPassword,
});

export const logInSuccess = (user) => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: error,
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
