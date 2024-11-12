import React from "react";
import * as S from "./style";
import { IAlbum } from "./../../constant/type";
import Button from "../common/Button";
import { ISuggestSong } from "../../constant/Suggest";

interface ITodaySong {
  songInfo: ISuggestSong;
}

const TodaySong = ({ songInfo }: ITodaySong) => {
  const OpenYoutube = () => {
    window.open(songInfo.url, "_blank");
  };

  return (
    <S.MainContainer>
      <S.Title>오늘의 노래</S.Title>
      <S.SongWrap>
        <S.SongInfoWrap>
          <S.Image src={songInfo.image} />
          <div>
            <S.SongTitle onClick={OpenYoutube}>{songInfo.title}</S.SongTitle>
            <S.Context>{songInfo.introduce}</S.Context>
            <S.Context>앨범명 : {songInfo.album}</S.Context>
            <S.Context>발매일 : {songInfo.date}</S.Context>
          </div>
        </S.SongInfoWrap>
        <Button context="들으러 가기" onClick={OpenYoutube} />
      </S.SongWrap>
    </S.MainContainer>
  );
};

export default TodaySong;
