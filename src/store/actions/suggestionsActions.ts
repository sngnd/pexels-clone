import { Constants } from "./../constants";
import { SuggestionsAction, SuggestionsType } from "../types";

const getSuggestions = (payload: SuggestionsType): SuggestionsAction => {
  return {
    type: Constants.GET_SUGGESTIONS,
    payload,
  };
};

export { getSuggestions };
