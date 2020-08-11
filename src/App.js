import React from "react";
import background from "../assets/posters/main.jpg";
import PosterExhibition from "./components/PosterExhibition";

const App = () => {
  return (
    <div>
      <div>
        <img src={background} style={{ width: "100%" }}></img>
        <PosterExhibition />
      </div>
    </div>
  );
};

export default App;
