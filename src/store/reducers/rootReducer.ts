import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import backgroundReducer from "./backgroundReducer";
import modalReducer from "./modalReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  background: backgroundReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
