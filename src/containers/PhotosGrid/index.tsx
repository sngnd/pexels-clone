import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import styles from "./PhotosGrid.module.css";
import { Link } from "react-router-dom";
import { Image } from "../../components/";

interface PhotosProps {
  isHomePage: boolean;
}

const PhotosGrid: FC<PhotosProps> = ({ isHomePage }) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.photos
  );

  useEffect(() => {
    if (!isHomePage) {
      const query = window.location.pathname.substring(8);
    }
  }, []);

  const showPhotos = (): JSX.Element[] | undefined => {
    console.log(data?.photos);
    return data?.photos.map((image) => <Image image={image} key={image.id} />);
  };

  return (
    <section className={styles.container}>
      {isHomePage ? (
        <></>
      ) : (
        <Link to="/">
          <button className={styles.photos__back}>Back to main page</button>
        </Link>
      )}
      <div className={styles.photos}>
        {loading ? (
          <div className={styles.loader__wrapper}>
            <div className={styles.loader}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : error ? (
          <div>Error</div>
        ) : data?.total_results !== 0 ? (
          <div className={styles.photos__wrapper}>{showPhotos()}</div>
        ) : (
          <div> No results </div>
        )}
      </div>
    </section>
  );
};

export default PhotosGrid;
