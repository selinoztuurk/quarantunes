import React from "react";

const PosterRow = ({ songSrc, imgSrc, nameSrc, spotifySrc }) => {
  /*var song = new Audio(songSrc);
  song.preload = "none";
  song.muted = true;
  song.autoplay = false;*/

  var song = null;

  /*const playSong = () => {
    var promise = song.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          song.play();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const pauseSong = () => {
    var promise = song.pause();
    if (promise !== undefined) {
      promise
        .then(() => {
          song.pause();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };*/

  return (
    <div className="ui container">
      <div className="ui centered grid">
        <div
          className="eight wide computer twelve wide mobile column"
          style={{
            display: "flex",
            placeContent: "center",
          }}
        >
          <img
            alt="poster"
            src={imgSrc}
            style={{
              width: "80%",
              height: "100%",
              border: "2px solid #74CEEB",
            }}
            onClick={() => {
              //song.muted = false;
              //playSong();
              if (song === null) {
                song = new Audio(songSrc);
              }
              var promise = song.play();
              if (promise !== undefined) {
                promise
                  .then(() => {
                    song.play();
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }
            }}
            onMouseLeave={() => {
              //song.muted = true;
              //pauseSong();
              if (song !== null) {
                var promise = song.pause();
                if (promise !== undefined) {
                  promise
                    .then(() => {
                      song.pause();
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }
              }
            }}
          />
          <img
            alt="nametag"
            src={nameSrc}
            style={{ height: "10%", width: "auto", border: "3px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PosterRow;
