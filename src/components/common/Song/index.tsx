import React from "react";

interface IAlbum {
  image: string;
  title: string;
  date: string;
  isAlbum?: boolean;
}

const Song = ({ image, title, date, isAlbum }: IAlbum) => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <p></p>
        <p></p>
        <p>{isAlbum && "..."}</p>
      </div>
    </div>
  );
};

export default Song;
