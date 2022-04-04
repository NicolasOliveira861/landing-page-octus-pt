import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import GlogalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GlogalStyle />
    </BrowserRouter>
  );
};

export default App;
