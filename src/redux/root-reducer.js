import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/user.reducer";
import { workoutReducer } from "./workouts/workout.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export const rootReducer = combineReducers({
  user: userReducer,
  journal: workoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
