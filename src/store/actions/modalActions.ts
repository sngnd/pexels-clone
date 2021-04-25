import { ModalAction, ModalProperties } from "./../types";
import { Constants } from "./../constants";

export function showModal(payload: ModalProperties): ModalAction {
  return {
    type: Constants.SHOW_MODAL,
    payload,
  };
}

export function hideModal(): ModalAction {
  return {
    type: Constants.HIDE_MODAL,
  };
}
