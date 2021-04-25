import styles from "./Header.module.css";
import { SearchForm } from "../";
import { useState, FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
  const { data } = useSelector((state: RootState) => state.background);
  const { suggestions } = useSelector((state: RootState) => state.suggestions);

  const [bgUrl, setBgUrl] = useState("");
  const [bgAuthorUrl, setBgAuthorUrl] = useState("");

  useEffect(() => {
    const photo = data?.photos[0];
    setBgUrl(`${photo?.src.original}`);
    setBgAuthorUrl(`${photo?.photographer_url}`);
  }, [data?.photos]);

  const showSuggestions = () => {
    let result = suggestions.split(",");
    return result.map((item) => (
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
        <span className={styles.header__author}>
          Photo by {""}
          <a
            href={bgAuthorUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.header__author_url}
          >
            {data?.photos[0].photographer}
          </a>
        </span>
      </header>
    </>
  );
};
export { Header };
