import React from "react";
import * as S from "./style";
import MainImg from "../../asset/MainImg.png";
import DirectionImg from "../../asset/Direction.png";
import TodaySong from "../../components/TodaySong";
import { RandomIndex } from "../../util/randomIdx";
import { SuggestSong } from "../../constant/Suggest";

const Main = () => {
  return (
    <>
      <S.MainContainer>
        <div>
          <S.ImgBlur>
            <S.Title>eill</S.Title>
            <S.Line />
            <S.Introduce>Tokyo | singer-songwriter</S.Introduce>
          </S.ImgBlur>
          <S.Img src={MainImg} alt="mainimg" />
        </div>
        <S.Direction src={DirectionImg} alt="direction" />
      </S.MainContainer>

      <TodaySong songInfo={SuggestSong[RandomIndex(SuggestSong)]} />
    </>
  );
};

export default Main;
