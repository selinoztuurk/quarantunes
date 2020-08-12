import React from "react";
import background from "./main.jpg";
import PosterExhibition from "./components/PosterExhibition";

const App = () => {
  return (
    <div>
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <img
              src={background}
              style={{ width: "100%", border: "2px solid #74CEEB" }}
            ></img>
            <p className="lead" style={{ margin: "1%" }}>
              Welcome to our interactive digital exhibition. Hover your mouse
              over the posters to listen to the songs that inspired our work.
            </p>
          </div>
        </div>

        <PosterExhibition />
      </div>
    </div>
  );
};

export default App;
