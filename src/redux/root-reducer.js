import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { workoutReducer } from "./workouts/workout.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  journal: workoutReducer,
});
