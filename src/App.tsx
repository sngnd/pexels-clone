import { FC } from "react";
import "./App.css";
import { NavBar } from "./components/";
import { Modal } from "./components/";
import Routes from "./routes";

const App: FC = () => {
  return (
    <div>
      <Modal />
      <Routes />
    </div>
  );
};

export default App;
