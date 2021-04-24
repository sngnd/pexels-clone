import { PhotosData } from "./../types";
import { Constants } from "../constants";
import { BackgroundAction } from "../types";
import { client } from "../../api/";
import { PhotosWithTotalResults, ErrorResponse } from "pexels";

const PER_PAGE_1 = 1;
const COLOR = "black";
const QUERY = "Nature";
const ORIENTATION = "landscape";

const getBackground = (): BackgroundAction => ({
  type: Constants.GET_BACKGROUND,
});

const getBackgroundSuccess = (payload: PhotosData): BackgroundAction => ({
  type: Constants.GET_BACKGROUND_SUCCESS,
  payload,
});

const getBackgroundError = (payload: string): BackgroundAction => ({
  type: Constants.GET_BACKGROUND_ERROR,
  payload,
});

const fetchBackground = async (dispatch: any, page: number) => {
  dispatch(getBackground());
  try {
    const photo:
      | PhotosWithTotalResults
      | ErrorResponse = await client.photos.search({
      per_page: PER_PAGE_1,
      page: page,
      color: COLOR,
      query: QUERY,
      orientation: ORIENTATION,
    });
    console.log("back" + photo);
    if ("error" in photo) {
      throw new Error(photo.error);
    } else {
      dispatch(getBackgroundSuccess(photo));
    }
  } catch (error) {
    dispatch(getBackgroundError(error));
  }
};

export { fetchBackground };
