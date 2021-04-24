import { Route } from "react-router-dom";
import Home from "../pages/HomePage";
import PhotosGrid from "../containers/PhotosGrid";
import ResultsPage from "../pages/ResultsPage";

const Routes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <ResultsPage />
      </Route>
    </div>
  );
};

export default Routes;
