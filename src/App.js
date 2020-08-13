import React from "react";
import background from "./main.jpg";
import PosterExhibition from "./components/PosterExhibition";

const App = () => {
  return (
    <div>
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white", display: "flex" }}
        >
          <div className="container">
            <img
              src={background}
              style={{ width: "100%", border: "2px solid #74CEEB" }}
            ></img>
            <p
              className="lead"
              style={{
                marginTop: "5%",
                textAlign: "right",
                fontFamily: "monospace",
                fontStretch: "condensed",
              }}
            >
              we, the creative typography students bound at home, were lucky to
              listen to the timeless songs all of which were born with a hum
              and/or a word. so we simply went to the beginning by designing
              posters humming typography. click on the posters to listen to the
              songs that inspired our work.
            </p>
            <a href="https://open.spotify.com/playlist/3Po4H8HFm90spt2JJIxLbm?si=a_Ep5eZ6QvihFalaTtMbVQ">
              <img
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                style={{
                  height: "30px",
                  width: "auto",
                }}
              ></img>
            </a>
          </div>
        </div>

        <PosterExhibition />
      </div>
    </div>
  );
};

export default App;
