import WorkoutActionTypes from "./workout.types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const getJournalStart = (bool) => ({
  type: WorkoutActionTypes.GET_JOURNAL_START,
  payload: bool,
});

const getJournalSuccess = (workouts) => ({
  type: WorkoutActionTypes.GET_JOURNAL_SUCCESS,
  payload: workouts,
});

const getJournalFailure = (error) => ({
  type: WorkoutActionTypes.GET_JOURNAL_FAILURE,
  payload: error,
});
export const getJournal = (token, id) => (dispatch) => {
  dispatch(getJournalStart(true));
  axiosWithAuth()
    .get(`users/${id}/journal`, token)
    .then((response) => {
      dispatch(getJournalSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getJournalFailure(error));
    });
};
