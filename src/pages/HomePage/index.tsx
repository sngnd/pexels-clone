import { FC, useEffect } from "react";
import { Header, NavBar } from "../../components";
import PhotosGrid from "../../components/PhotosGrid";
import { useDispatch } from "react-redux";
import { fetchBackground } from "../../store/actions/backgroundActions";
import { getSuggestions } from "../../store/actions/suggestionsActions";
import { SUGGESTIONS } from "../../suggestions";

interface HomeProps {
  onSearch: (query: string) => void;
}

const SUGGESTIONS_LENGTH = 7;
const MAX_RANGE = 40;
const MIN_RANGE = 1;

const Home: FC<HomeProps> = ({ onSearch }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBackground(dispatch);
    setSuggestions();
  }, []);

  const setSuggestions = () => {
    let currentSuggestions = SUGGESTIONS.split(",");
    let results = [];
    while (results.length < SUGGESTIONS_LENGTH) {
      let random = Math.floor(
        Math.random() * (MAX_RANGE - MIN_RANGE) + MIN_RANGE
      );
      if (results.indexOf(currentSuggestions[random]) < 0) {
        results.push(currentSuggestions[random]);
      }
    }
    let res = results.join(",");
    dispatch(getSuggestions({ suggestions: res }));
  };

  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Header onSearch={onSearch} />
      <PhotosGrid isHomePage={true} />
    </div>
  );
};

export default Home;
