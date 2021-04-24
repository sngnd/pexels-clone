import { FC, useEffect } from "react";
import { Header } from "../../components";
import PhotosGrid from "../../containers/PhotosGrid";
import { useDispatch } from "react-redux";
import { fetchCuratedPhotos } from "../../store/actions/photosActions";

const Home: FC = () => {
  const dispatch = useDispatch();
  const searchPhotosHandler = (query: string) => {
    //   dispatch(getPhotos(1, query));
  };

  

  useEffect(() => {
    fetchCuratedPhotos(dispatch, 1);
  }, []);

  return (
    <div>
      <Header />
      <PhotosGrid isHomePage={true} />
    </div>
  );
};

export default Home;
