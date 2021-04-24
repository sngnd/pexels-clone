import { Photo } from "pexels";
import { PhotosState, BackgroundAction } from "../types";
import { Constants } from "../constants";

const initialState: PhotosState = {
  data: null,
  loading: false,
  error: "",
};

const backgroundReducer = (
  state = initialState,
  action: BackgroundAction
): PhotosState => {
  switch (action.type) {
    case Constants.GET_BACKGROUND:
      return { ...state, loading: true, error: "" };

    case Constants.GET_BACKGROUND_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: "" };

    case Constants.GET_BACKGROUND_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default backgroundReducer;
