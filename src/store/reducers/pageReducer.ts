import { PageAction, PageType } from "../types";
import { Constants } from "../constants";

const initialState = {
  page: 0,
};

const pageReducer = (state = initialState, action: PageAction): PageType => {
  switch (action.type) {
    case Constants.NEXT_PAGE:
      return { ...state, page: state.page + 1 };

    case Constants.CLEAR:
      return initialState;

    default:
      return state;
  }
};

export { pageReducer };
