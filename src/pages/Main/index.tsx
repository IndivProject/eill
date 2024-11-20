import React from "react";
import * as S from "./style";
import MainImg from "../../asset/MainImg.png";
import DirectionImg from "../../asset/Direction.png";
import TodaySong from "../../components/TodaySong";
import { SuggestSong } from "../../constant/Suggest";
import { TodaySuggest } from "../../util/todaySuggest";
import AlbumList from "../../components/AlbumList";
import Footer from "../../components/common/Footer";

const Main = () => {
  return (
    <>
      <S.MainContainer>
        <div>
          <S.ImgBlur>
            <S.Title>eill</S.Title>
            <S.Line />
            <S.Introduce>Tokyo | singer-songwriter</S.Introduce>
            <S.Introduce>1998. 06. 17.</S.Introduce>
          </S.ImgBlur>
          <S.Img src={MainImg} alt="mainimg" />
        </div>
        <S.Direction src={DirectionImg} alt="direction" />
      </S.MainContainer>

      <TodaySong songInfo={SuggestSong[TodaySuggest()]} />

      <AlbumList />

      <Footer />
    </>
  );
};

export default Main;
