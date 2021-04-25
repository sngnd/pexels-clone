import { PhotosData } from "./../types";
import { Constants } from "../constants";
import { PhotosAction } from "../types";
import { client } from "../../api/";
import { PhotosWithTotalResults, Photos, ErrorResponse } from "pexels";
const PER_PAGE = 6;

const getPhotos = (): PhotosAction => ({
  type: Constants.GET_PHOTOS,
});

const getPhotosSuccess = (payload: PhotosData): PhotosAction => ({
  type: Constants.GET_PHOTOS_SUCCESS,
  payload,
});

const getPhotosError = (payload: string): PhotosAction => ({
  type: Constants.GET_PHOTOS_ERROR,
  payload,
});

const fetchPhotos = async (dispatch: any, query: string, page: number) => {
  dispatch(getPhotos());
  try {
    const photos:
      | PhotosWithTotalResults
      | ErrorResponse = await client.photos.search({
      query: query,
      per_page: PER_PAGE,
      page: page,
    });
    if ("error" in photos) {
      throw new Error(photos.error);
    } else {
      dispatch(getPhotosSuccess(photos));
    }
  } catch (error) {
    dispatch(getPhotosError(error));
  }
};

const fetchCuratedPhotos = async (dispatch: any, page: number) => {
  dispatch(getPhotos());
  try {
    const photos: Photos | ErrorResponse = await client.photos.curated({
      per_page: PER_PAGE,
      page: page,
    });
    if ("error" in photos) {
      throw new Error(photos.error);
    } else {
      dispatch(getPhotosSuccess(photos));
    }
  } catch (error) {
    dispatch(getPhotosError(error));
  }
};

export { fetchPhotos, fetchCuratedPhotos };
