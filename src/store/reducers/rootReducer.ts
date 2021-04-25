import { combineReducers } from "redux";
import {
  photosReducer,
  backgroundReducer,
  modalReducer,
  suggestionsReducer,
  pageReducer,
} from "./";

export const rootReducer = combineReducers({
  photos: photosReducer,
  background: backgroundReducer,
  modal: modalReducer,
  suggestions: suggestionsReducer,
  page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
