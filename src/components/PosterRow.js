import React from "react";

const PosterRow = ({ songSrc, imgSrc, nameSrc, spotifySrc }) => {
  var song = new Audio(songSrc);
  song.preload = "none";
  song.muted = true;

  return (
    <div className="ui container">
      <div className="ui two column grid">
        <div
          className="column"
          style={{
            display: "flex",
            placeContent: "center",
          }}
        >
          <img
            alt="poster"
            src={imgSrc}
            style={{ width: "80%", border: "2px solid #74CEEB" }}
            onMouseEnter={() => {
              song.muted = false;
              song.play();
            }}
            onMouseLeave={() => {
              song.muted = true;
              song.pause();
            }}
          />
        </div>
        <div
          className="column"
          style={{
            display: "flex",
          }}
        >
          <img
            alt="nametag"
            src={nameSrc}
            style={{ height: "80px", border: "8px solid black" }}
          />
          <iframe
            style={{ position: "absolute", top: "100px" }}
            src={spotifySrc}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PosterRow;
