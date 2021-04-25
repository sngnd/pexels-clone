import { useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import Home from "../pages/HomePage";
import ResultsPage from "../pages/ResultsPage";
import { fetchPhotos } from "../store/actions/photosActions";

const Routes = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSearch = (query: string) => {
    history.push(`/search/${query}`);
    fetchPhotos(dispatch, query, 1, 10);
  };

  return (
    <div>
      <Route exact path="/">
        <Home onSearch={onSearch} />
      </Route>
      <Route path="/search">
        <ResultsPage onSearch={onSearch} />
      </Route>
    </div>
  );
};

export default Routes;
