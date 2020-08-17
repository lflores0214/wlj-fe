import WorkoutActionTypes from "./workout.types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const getJournalStart = () => ({
  type: WorkoutActionTypes.GET_JOURNAL_START,
});

const getJournalSuccess = (workouts) => ({
  type: WorkoutActionTypes.GET_JOURNAL_SUCCESS,
  payload: workouts,
});

const getJournalFailure = (error) => ({
  type: WorkoutActionTypes.GET_JOURNAL_FAILURE,
  payload: error,
});
const setIsLoading = (bool) => ({
  type: WorkoutActionTypes.SET_IS_LOADING,
  payload: bool,
});
export const getJournal = (token, id) => (dispatch) => {
  dispatch(getJournalStart());
  dispatch(setIsLoading(true));
  axiosWithAuth(token)
    .get(`users/${id}/journal`, token)
    .then((response) => {
      dispatch(getJournalSuccess(response.data));
      dispatch(setIsLoading(false));
    })
    .catch((error) => {
      dispatch(getJournalFailure(error));
      dispatch(setIsLoading(false));
    });
};
const addWorkoutStart = () => ({
  type: WorkoutActionTypes.ADD_WORKOUT_START
})
const addWorkoutSuccess = () => ({
  
})
export const addEntry = (token, id, workout) => dispatch => {
  dispatch(addWorkoutStart())
  dispatch(setIsLoading(true))
  axiosWithAuth(token)
  .post(`users/${id}/journal`, workout)
  .then(response => {
    console.log(response)
    dispatch()
  })
}
