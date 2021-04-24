import styles from "./Header.module.css";
import { SearchForm } from "../";
import { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/actions/photosActions";
import { fetchBackground } from "../../store/actions/backgroundActions";
import { RootState } from "../../store/reducers/rootReducer";

const PER_PAGE_10 = 10;

interface HeaderProps {
  onSearchHandler: (query: string) => void;
}

const Header: FC = () => {
  const background = useSelector((state: RootState) => state.background);

  const [bgUrl, setBgUrl] = useState("");
  const [bgAuthorUrl, setBgAuthorUrl] = useState("");
  const [bgAuthor, setBgAuthor] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    getRandomPhoto();
  }, []);

  useEffect(() => {
    const photo = background.data?.photos[0];
    setBgUrl(`${photo?.src.original}`);
    setBgAuthorUrl(`${photo?.photographer_url}`);
    setBgAuthor(`${photo?.photographer}`);
  }, [background.data]);

  const getRandomPhoto = () => {
    const randomPage = getRandomPageNumber();
    fetchBackground(dispatch, randomPage);
  };

  const getRandomPageNumber = (): number => {
    return Math.floor(Math.random() * 20) + 1;
  };

  const onSearch = (query: string) => {
    setPage((prev) => prev + 1);
    fetchPhotos(dispatch, query, page, PER_PAGE_10);
  };

  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className={styles.header__wrapper}>
          <h1>
            The best free stock photos videos shared by talented creators.
          </h1>
          <SearchForm onSearch={onSearch} />
        </div>
        {background.loading === false ? (
          <span className={styles.header__author}>
            Photo by{" "}
            <a
              href={bgAuthorUrl}
              target="_blank"
              className={styles.header__author_url}
            >
              {bgAuthor}
            </a>
          </span>
        ) : (
          ""
        )}
      </header>
    </>
  );
};
export { Header };
