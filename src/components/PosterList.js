import React from "react";
import PosterRow from "./PosterRow";
import songList from "../songs.json";

const PosterList = () => {
  var posterLink = (id) => {
    return process.env.PUBLIC_URL + "/assets/posters/" + id + "-min.jpg";
  };
  var nametagLink = (id) => {
    return process.env.PUBLIC_URL + "/assets/nametags/" + id + ".png";
  };
  var songLink = (id) => {
    return process.env.PUBLIC_URL + "/assets/songs/" + id + ".mov";
  };

  const renderedList = songList.map((item) => {
    return (
      <PosterRow
        key={item.song}
        spotifySrc={item.src}
        imgSrc={posterLink(item.id)}
        nameSrc={nametagLink(item.id)}
        songSrc={songLink(item.id)}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default PosterList;
