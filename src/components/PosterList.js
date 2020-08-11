import React from "react";
import PosterRow from "./PosterRow";
import songList from "../assets/songs.json";

const PosterList = () => {
  var posterLink = (id) => {
    return "/assets/posters/" + id + "-min.jpg";
  };
  var nametagLink = (id) => {
    return "/assets/nametags/" + id + ".png";
  };
  var songLink = (id) => {
    return "/assets/songs/" + id + ".mov";
  };

  const renderedList = songList.map((item) => {
    return (
      <PosterRow
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
