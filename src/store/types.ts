import { Constants } from "./constants";
import { Photo } from "pexels";

// Photos types
export interface PhotosData {
  total_results?: number;
  page: number;
  photos: Photo[];
}

export interface PhotosState {
  data: PhotosData | null;
  loading: boolean;
  error: string;
}

interface GetPhotosSuccessAction {
  type: Constants.GET_PHOTOS_SUCCESS;
  payload: PhotosData;
}

interface GetPhotosAction {
  type: Constants.GET_PHOTOS;
}

interface GetPhotosErrorAction {
  type: Constants.GET_PHOTOS_ERROR;
  payload: string;
}

export type PhotosAction =
  | GetPhotosAction
  | GetPhotosSuccessAction
  | GetPhotosErrorAction;

// Background types
interface GetBackgroundAction {
  type: Constants.GET_BACKGROUND;
}

interface GetBackgroundSuccessAction {
  type: Constants.GET_BACKGROUND_SUCCESS;
  payload: PhotosData;
}

interface GetBackgroundErrorAction {
  type: Constants.GET_BACKGROUND_ERROR;
  payload: string;
}

export type BackgroundAction =
  | GetBackgroundAction
  | GetBackgroundSuccessAction
  | GetBackgroundErrorAction;

// Modal types
interface ShowModalAction {
  type: Constants.SHOW_MODAL;
  payload?: any;
}

interface HideModalAction {
  type: Constants.SHOW_MODAL;
  payload?: any;
}

export type ModalAction = ShowModalAction | HideModalAction;
