import { FC, MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { Photo } from "pexels";
import styles from "./PhotosGrid.module.css";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import { fetchPhotos } from "../../store/actions/photosActions";
import Modal from "../../components/Modal";

interface PhotosProps {
  isHomePage: boolean;
  // onImageClickHandler:
  // searchFor?: string;
}

const PhotosGrid: FC<PhotosProps> = ({ isHomePage }) => {
  let { data, loading, error } = useSelector(
    (state: RootState) => state.photos
  );

  const [src, setSrc] = useState({});
  const [authorUrl, setAuthorUrl] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onImageClickHandler = (e: MouseEvent, image: Photo) => {
    e.preventDefault();
    setSrc(image.src);
    setAuthorName(image.photographer);
    setAuthorUrl(image.photographer_url);
    setShowModal(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isHomePage) {
      const query = window.location.pathname.substring(8);
      fetchPhotos(dispatch, query, 1, 10);
    }
  }, []);

  const showPhotos = (): JSX.Element[] | undefined => {
    console.log(data?.photos);
    return data?.photos.map((image) => (
      <Image
        image={image}
        openModal={onImageClickHandler}
        onLikeHandler={onLikeHandler}
        isImageLiked={isImageLiked(image.id)}
        key={image.id}
      />
    ));
  };

  const onLikeHandler = (id: number): void => {
    let storedLikes = localStorage.getItem("likes");
    // liked ? setLiked(false) : setLiked(true);
    let likes = [];
    if (storedLikes != null) {
      storedLikes = JSON.parse(storedLikes);
      if (typeof storedLikes?.length !== "undefined") {
        for (let i = 0; i < storedLikes?.length; i++) {
          likes.push(storedLikes[i]);
        }
        if (isImageLiked(id)) {
          const index = likes.indexOf(id.toString());
          console.log(index);
          likes.splice(index, 1);
        } else {
          likes.push(id.toString());
        }
      }
    }
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  const isImageLiked = (id: number) => {
    let storedLikes = localStorage.getItem("likes");
    if (storedLikes != null) {
      storedLikes = JSON.parse(storedLikes);
      if (storedLikes?.includes(id.toString())) {
        return true;
      }
    }
    return false;
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
