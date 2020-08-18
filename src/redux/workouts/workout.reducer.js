import WorkoutActionTypes from "./workout.types";

const INITIAL_STATE = {
  workouts: [],
  isLoading: false,
  error: null,
};

export const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkoutActionTypes.GET_JOURNAL_START:
    case WorkoutActionTypes.ADD_WORKOUT_START:
      return {
        ...state,
      };
    case WorkoutActionTypes.GET_JOURNAL_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
      };
    case WorkoutActionTypes.ADD_WORKOUT_SUCCESS:
      return {
        ...state,
      };
    case WorkoutActionTypes.ADD_WORKOUT_FAILURE:
    case WorkoutActionTypes.GET_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case WorkoutActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
