import React from "react";
import { Album } from "../../constant/Album";
import * as S from "./style";
import Song from "../common/Song";

const AlbumList = () => {
  const count: number = 3;

  return (
    <>
      <S.Title>Album</S.Title>
      <div>
        {new Array(
          Album.length % count != 0
            ? Math.floor(Album.length / count + 1)
            : Math.floor(Album.length / count)
        )
          .fill(0)
          .map((_, idx) => {
            return (
              <S.SongWrap key={idx}>
                {new Array(count).fill(0).map((_, idx1) => {
                  if (Album[idx1 + count * idx] == null) return <></>;
                  return (
                    <Song
                      image={Album[idx1 + count * idx].image}
                      title={Album[idx1 + count * idx].title}
                      date={Album[idx1 + count * idx].date}
                      inviteSong={Album[idx1 + count * idx].songs[0]}
                      isAlbum
                    />
                  );
                })}
              </S.SongWrap>
            );
          })}
      </div>
      <S.Title>Single</S.Title>
    </>
  );
};

export default AlbumList;
