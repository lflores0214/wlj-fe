import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  user: {id: 0, username: ""},
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: { id: action.payload.id, username: action.payload.username },
      };
    case UserActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
      case UserActionTypes.SET_IS_LOGGED_IN:
        return {
          ...state,
          isLoggedIn: action.payload
        }
    case UserActionTypes.LOG_IN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case UserActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
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
      case UserActionTypes.REGISTER_START:
        return {
          ...state,
          isLoading: true
        }
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
