import { Route, useHistory } from "react-router-dom";
import Home from "../pages/HomePage";
import ResultsPage from "../pages/ResultsPage";

const Routes = () => {
  const history = useHistory();

  const onSearch = (query: string) => {
    history.push(`/search/${query}`);
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
