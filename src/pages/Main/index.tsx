import React from "react";
import * as S from "./style";
import MainImg from "../../asset/MainImg.png";

const Main = () => {
  return (
    <S.MainContainer>
      <div>
        <S.ImgBlur>
          <S.Title>eill</S.Title>
          <S.Line />
          <S.Introduce>tokyo | singer-songwriter</S.Introduce>
        </S.ImgBlur>
        <S.Img src={MainImg} alt="mainimg" />
      </div>
    </S.MainContainer>
  );
};

export default Main;
