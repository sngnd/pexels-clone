import { Constants } from "../constants";
import { PageAction } from "../types";

export const getToNextPage = (): PageAction => {
  return {
    type: Constants.NEXT_PAGE,
  };
};

export const clearPages = (): PageAction => ({
  type: Constants.CLEAR,
});
