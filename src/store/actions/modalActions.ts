import { Constants } from "./../constants";

export function showModal(): ModalAct ion {
  return {
    type: Constants.SHOW_MODAL,
  };
}

export function hideModal(): ModalAction {
  return {
    type: Constants.HIDE_MODAL,
  };
}
