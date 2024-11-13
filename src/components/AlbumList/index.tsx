import React from "react";
import { Album } from "../../constant/Album";

const AlbumList = () => {
  return (
    <>
      <p>Album</p>
      <div>
        {new Array(
          Album.length % 3 != 0
            ? Math.floor(Album.length / 3 + 1)
            : Math.floor(Album.length / 3)
        )
          .fill(0)
          .map((_, idx) => {
            return (
              <p key={idx}>
                {new Array(3).fill(0).map((_, idx1) => {
                  if (Album[idx1 + 3 * idx] == null) return <></>;
                  return <p>{Album[idx1 + 3 * idx].title}</p>;
                })}
              </p>
            );
          })}
      </div>
      <p>Single</p>
    </>
  );
};

export default AlbumList;
