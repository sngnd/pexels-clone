import { PhotosState, PhotosAction } from "../types";
import { Constants } from "../constants";
import { Photo } from "pexels";

const initialState: PhotosState = {
  data: null,
  loading: false,
  error: "",
};

const photosReducer = (
  state = initialState,
  action: PhotosAction
): PhotosState => {
  switch (action.type) {
    case Constants.GET_PHOTOS:
      return { ...state, loading: true, error: "" };

    case Constants.GET_PHOTOS_SUCCESS:
      const { photos, total_results, page } = action.payload;
      let photosArr: Photo[] = [];
      if (page > 1 && state != null && state.data != null) {
        photosArr = [...state.data.photos, ...photos];
      } else {
        photosArr = photos;
      }
      return {
        ...state,
        data: { photos: photosArr, total_results: total_results, page: page },
        loading: false,
        error: "",
      };

    case Constants.GET_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export { photosReducer };
