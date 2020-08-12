import WorkoutActionTypes from "./workout.types";

const INITIAL_STATE = {
  workouts: [],
  isLoading: false,
  error: null,
};

export const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkoutActionTypes.GET_JOURNAL_START:
      return {
        ...state,
        isLoading: action.payload
      };
    case WorkoutActionTypes.GET_JOURNAL_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
      };
    case WorkoutActionTypes.GET_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
