import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import backgroundReducer from "./backgroundReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  background: backgroundReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
