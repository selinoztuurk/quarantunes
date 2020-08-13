import React from "react";

const PosterRow = ({ item, songSrc, imgSrc, nameSrc, spotifySrc }) => {
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
          className="eight wide computer fourteen wide mobile column"
          style={{ marginBottom: "10%" }}
        >
          <img
            alt="poster"
            src={imgSrc}
            style={{
              width: "100%",
              height: "auto",
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
          <div className="nametag" style={{ marginTop: "3%" }}>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              {item.designer}
            </p>
            <p style={{ fontFamily: "monospace" }}>
              "{item.song}" <br /> {item.artist}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterRow;
