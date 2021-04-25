import PhotosGrid from "../../components/PhotosGrid";
import { NavBar } from "../../components";
import { FC } from "react";

interface ResultPageProps {
  onSearch: (query: string) => void;
}

const ResultsPage: FC<ResultPageProps> = ({ onSearch }) => {
  return (
    <>
      <NavBar onSearch={onSearch} />
      <PhotosGrid isHomePage={false} />
    </>
  );
};

export default ResultsPage;
