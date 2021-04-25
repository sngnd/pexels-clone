import logo from "./icon.svg";
import styles from "./NavBar.module.css";
import { SearchForm } from "../index";
import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router";

interface NavBarProps {
  onSearch: (query: string) => void;
}

const NavBar: FC<NavBarProps> = ({ onSearch }) => {
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!location.pathname.includes("/search")) {
      window.addEventListener("scroll", changeBackground);
    } else {
      setIsActive(true);
    }
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [location.pathname]);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setIsActive(true);
    } else setIsActive(false);
  };

  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
      <a className={styles.nav__logo} href="/" title="Pexels">
        <img src={logo} className={styles.nav__logo_img} alt="logo" />
        <p className={styles.nav__logo_text}>Pexels</p>
      </a>
      {isActive ? <SearchForm onSearch={onSearch} /> : ""}
    </nav>
  );
};

export { NavBar };
