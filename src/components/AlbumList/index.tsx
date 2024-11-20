import React from "react";
import { Album } from "../../constant/Album";
import * as S from "./style";
import Song from "../common/Song";
import { Single } from "../../constant/Single";
import useGetBrWidth from "../../hooks/useGetBrWidth";

const AlbumList = () => {
  const { checkWidth } = useGetBrWidth();
  const count: number = 3;

  const CalculateIndex = (idx: number, idx1: number): number => {
    if (checkWidth()) return idx;
    return idx1 + count * idx;
  };

  return (
    <>
      <S.SongContainer isMoblie={checkWidth()}>
        <S.Title isMoblie={checkWidth()}>Album</S.Title>
        <S.Line />
        <div>
          {new Array(
            checkWidth()
              ? Album.length
              : Album.length % count != 0
              ? Math.floor(Album.length / count + 1)
              : Math.floor(Album.length / count)
          )
            .fill(0)
            .map((_, idx) => {
              return (
                <S.SongWrap key={idx} isMoblie={checkWidth()}>
                  {new Array(checkWidth() ? 1 : count)
                    .fill(0)
                    .map((_, idx1) => {
                      if (Album[CalculateIndex(idx, idx1)] == null)
                        return <></>;
                      return (
                        <Song
                          image={Album[CalculateIndex(idx, idx1)].image}
                          title={Album[CalculateIndex(idx, idx1)].title}
                          date={Album[CalculateIndex(idx, idx1)].date}
                          idx={CalculateIndex(idx, idx1)}
                          inviteSong={
                            Album[CalculateIndex(idx, idx1)].songs[0].name
                          }
                          inviteSong2={
                            Album[CalculateIndex(idx, idx1)].songs[1].name
                          }
                          isAlbum
                        />
                      );
                    })}
                </S.SongWrap>
              );
            })}
        </div>
      </S.SongContainer>
      <S.SongContainer isMoblie={checkWidth()}>
        <S.Title isMoblie={checkWidth()}>Single</S.Title>
        <S.Line />
        <div>
          {new Array(
            checkWidth()
              ? Single.length
              : Single.length % count != 0
              ? Math.floor(Single.length / count + 1)
              : Math.floor(Single.length / count)
          )
            .fill(0)
            .map((_, idx) => {
              return (
                <S.SongWrap key={idx} isMoblie={checkWidth()}>
                  {new Array(checkWidth() ? 1 : count)
                    .fill(0)
                    .map((_, idx1) => {
                      if (Single[CalculateIndex(idx, idx1)] == null)
                        return <></>;
                      return (
                        <Song
                          image={Single[CalculateIndex(idx, idx1)].image}
                          title={Single[CalculateIndex(idx, idx1)].title}
                          date={Single[CalculateIndex(idx, idx1)].date}
                          idx={CalculateIndex(idx, idx1)}
                          inviteSong={Single[CalculateIndex(idx, idx1)].title}
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
