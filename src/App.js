import React from "react";
import "./index.css";

import Navbar from "./components/layout/navbar/index";
import Header from "./components/layout/header/index";
import Content from "./components/page/content/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
    </>
  );
};

export default App;
