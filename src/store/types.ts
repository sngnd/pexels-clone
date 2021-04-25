import { Constants } from "./constants";
import { Photo } from "pexels";

// Photos types
export interface PhotosData {
  total_results?: number;
  page: number;
  photos: Photo[];
}

export type PhotosState = {
  data: PhotosData | null;
  loading: boolean;
  error: string;
};

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
  payload: ModalProperties;
}

interface HideModalAction {
  type: Constants.HIDE_MODAL;
  payload?: any;
}

export interface ModalProperties {
  imageSrc: Photo["src"];
  imageId: number;
}

export type ModalState = {
  modal: ModalProperties | null;
};

export type ModalAction = ShowModalAction | HideModalAction;

// suggestions types
export interface SuggestionsAction {
  type: Constants.GET_SUGGESTIONS;
  payload: SuggestionsType;
}

export type SuggestionsType = {
  suggestions: string;
};

// like

export interface PageAction {
  type: Constants.NEXT_PAGE;
}

export type PageType = {
  page: number;
};
