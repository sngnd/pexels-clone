import { Constants } from "./../constants";
import { SuggestionsAction, SuggestionsType } from "../types";

const initialState = {
  suggestions: "",
};

const suggestionsReducer = (
  state = initialState,
  action: SuggestionsAction
): SuggestionsType => {
  switch (action.type) {
    case Constants.GET_SUGGESTIONS:
      return action.payload;

    default:
      return state;
  }
};

export { suggestionsReducer };
