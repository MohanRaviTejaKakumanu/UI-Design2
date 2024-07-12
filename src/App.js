import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Foot from "./components/Foot";

const Applayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
      <Foot />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
