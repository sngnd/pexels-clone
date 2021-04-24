import React, { FC } from "react";
import "./App.css";
import { NavBar } from "./components/";
import Routes from "./routes";

const App: FC = () => {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
