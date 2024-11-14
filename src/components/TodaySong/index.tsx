import React, { useState } from "react";
import * as S from "./style";
import { IAlbum } from "./../../constant/type";
import Button from "../common/Button";
import { ISuggestSong } from "../../constant/Suggest";

interface ITodaySong {
  songInfo: ISuggestSong;
}

const TodaySong = ({ songInfo }: ITodaySong) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const OpenYoutube = () => {
    window.open(songInfo.url, "_blank");
  };

  return (
    <S.MainContainer>
      <S.Title>오늘의 노래</S.Title>
      <S.SongWrap
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <S.SongInfoWrap>
          <S.ImageWrap>
            {
              <S.ImageFilter isHover={isHover}>
                <S.DetailContext>자세히 보기</S.DetailContext>
              </S.ImageFilter>
            }
            <S.Image src={songInfo.image} />
          </S.ImageWrap>
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
