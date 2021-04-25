import { FC, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import styles from "./PhotosGrid.module.css";
import { Link } from "react-router-dom";
import { Image } from "..";
import {
  fetchCuratedPhotos,
  fetchPhotos,
} from "../../store/actions/photosActions";
import { getToNextPage } from "../../store/actions/pageAction";

interface PhotosProps {
  isHomePage: boolean;
}

const PhotosGrid: FC<PhotosProps> = ({ isHomePage }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.page);

  const { data, loading, error } = useSelector(
    (state: RootState) => state.photos
  );

  useEffect(() => {
    if (!isHomePage) {
      const query = window.location.pathname.substring(8);
      fetchPhotos(dispatch, query, page);
    } else {
      fetchCuratedPhotos(dispatch, page);
    }
  }, [page]);

  const showPhotos = (): JSX.Element[] | undefined => {
    console.log(data?.photos);
    return data?.photos.map((image) => <Image image={image} key={image.id} />);
  };

  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch(getToNextPage());
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  let bottomBoundaryRef = useRef(null);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

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
        {/* {loading ? (
          <div className={styles.loader__wrapper}>
            <div className={styles.loader}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : error ? (
          <div className={styles.photos__error}>{error}</div>
        ) : data?.total_results !== 0 ? (
          <> */}
        <div className={styles.photos__wrapper}>{showPhotos()}</div>
        {/* </>
        ) : (
          <div className={styles.photos__noResult}>No results</div>
        )} */}
      </div>
      <div
        style={{ border: "1px solid red" }}
        ref={bottomBoundaryRef}
        className={styles.bottom}
      ></div>
    </section>
  );
};

export default PhotosGrid;
