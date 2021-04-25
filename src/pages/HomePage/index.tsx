import { FC, useEffect } from "react";
import { Header, NavBar } from "../../components";
import PhotosGrid from "../../containers/PhotosGrid";
import { useDispatch } from "react-redux";
import { fetchCuratedPhotos } from "../../store/actions/photosActions";

interface HomeProps {
  onSearch: (query: string) => void;
}

const Home: FC<HomeProps> = ({ onSearch }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCuratedPhotos(dispatch, 1);
  }, []);

  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Header onSearch={onSearch} />
      <PhotosGrid isHomePage={true} />
    </div>
  );
};

export default Home;
