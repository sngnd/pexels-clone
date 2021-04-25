import { FC, useCallback, useEffect, useRef } from "react";
import "./App.css";
import { Modal } from "./components/";
import Routes from "./routes";
import { getSuggestions } from "./store/actions/suggestionsActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchCuratedPhotos } from "./store/actions/photosActions";
import { fetchBackground } from "./store/actions/backgroundActions";
import { SUGGESTIONS } from "./suggestions";
import { RootState } from "./store/reducers/rootReducer";
import { getToNextPage } from "./store/actions/pageAction";
import PhotosGrid from "./components/PhotosGrid";

const SUGGESTIONS_LENGTH = 7;
const MAX_RANGE = 40;
const MIN_RANGE = 1;

const App: FC = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.page);

  // useEffect(() => {
  //   fetchCuratedPhotos(dispatch, 1);
  //   fetchBackground(dispatch);
  //   setSuggestions();
  // }, []);

  // const setSuggestions = () => {
  //   let currentSuggestions = SUGGESTIONS.split(",");
  //   let results = [];
  //   while (results.length < SUGGESTIONS_LENGTH) {
  //     let random = Math.floor(
  //       Math.random() * (MAX_RANGE - MIN_RANGE) + MIN_RANGE
  //     );
  //     if (results.indexOf(currentSuggestions[random]) < 0) {
  //       results.push(currentSuggestions[random]);
  //     }
  //   }
  //   let res = results.join(",");
  //   dispatch(getSuggestions({ suggestions: res }));
  // };

  return (
    <div>
      <Modal />
      <Routes />
    </div>
  );
};

export default App;
