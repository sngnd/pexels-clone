import styles from "./Header.module.css";
import { SearchForm } from "../";
import { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBackground } from "../../store/actions/backgroundActions";
import { RootState } from "../../store/reducers/rootReducer";
import { SUGGESTIONS } from "../../suggestions";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
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
    const randomPage = getRandomNumber(20, 1);
    fetchBackground(dispatch, randomPage);
  };

  const getRandomNumber = (max: number, min: number): number => {
    let arr: Array<number> = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    return Math.floor(Math.random() * max) + min;
  };

  const showSuggestions = () => {
    let array: Array<string> = [];
    for (let i = 0; i < 7; i++) {
      array.push(SUGGESTIONS[getRandomNumber(39, 0)]);
    }
    return array.map((item) => (
      <button
        className={styles.suggestion}
        onClick={(e) => {
          e.preventDefault();
          onSearch(item);
        }}
        key={item + new Date().getTime()}
      >
        {item}
      </button>
    ));
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
          <div className={styles.header__suggestions}>
            <strong>Suggested: </strong>
            {showSuggestions()}
          </div>
        </div>
        {background.loading === false ? (
          <span className={styles.header__author}>
            Photo by {""}
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
