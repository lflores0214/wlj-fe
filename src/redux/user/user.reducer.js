import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOG_IN_START:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
        isLoggedIn: false,
        error: null,
      };
    case UserActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };
    case UserActionTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLoading: false,
        isLoggedIn: false,
        error: null,
      };
    case UserActionTypes.LOG_IN_FAILURE:
    case UserActionTypes.REGISTER_FAILURE:
    case UserActionTypes.LOG_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
