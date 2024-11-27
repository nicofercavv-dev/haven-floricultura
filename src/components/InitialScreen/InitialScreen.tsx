import React from "react";
import "./styles.css";
import InitialText from "../InitialText/InitialText";
import Banner from "../Banner/Banner";

const InitialScreen: React.FC = () => {
  return (
    <div className="initial-screen-container">
      <InitialText />
      <Banner />
    </div>
  );
};

export default InitialScreen;
