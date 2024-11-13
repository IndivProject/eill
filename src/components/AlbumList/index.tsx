import React from "react";
import { Album } from "../../constant/Album";
import * as S from "./style";
import Song from "../common/Song";
import { Single } from "../../constant/Single";

const AlbumList = () => {
  const count: number = 3;

  return (
    <>
      <S.SongContainer>
        <S.Title>Album</S.Title>
        <S.Line />
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
                        inviteSong2={Album[idx1 + count * idx].songs[1]}
                        isAlbum
                      />
                    );
                  })}
                </S.SongWrap>
              );
            })}
        </div>
      </S.SongContainer>
      <S.SongContainer>
        <S.Title>Single</S.Title>
        <S.Line />
        <div>
          {new Array(
            Single.length % count != 0
              ? Math.floor(Single.length / count + 1)
              : Math.floor(Single.length / count)
          )
            .fill(0)
            .map((_, idx) => {
              return (
                <S.SongWrap key={idx}>
                  {new Array(count).fill(0).map((_, idx1) => {
                    if (Single[idx1 + count * idx] == null) return <></>;
                    return (
                      <Song
                        image={Single[idx1 + count * idx].image}
                        title={Single[idx1 + count * idx].title}
                        date={Single[idx1 + count * idx].date}
                        inviteSong={Single[idx1 + count * idx].title}
                      />
                    );
                  })}
                </S.SongWrap>
              );
            })}
        </div>
      </S.SongContainer>
    </>
  );
};

export default AlbumList;
