import React from "react";
import * as S from "./style";
import EillImg from "../../../asset/Eill.webp";

const Footer = () => {
  return (
    <S.Footer>
      <S.Logo src={EillImg} alt="logo" />
      <div>
        <S.Context>Copyright ⓒ 2024. eill All rights reserved.</S.Context>
        <S.Context>가사 출처 : Google, genius.com</S.Context>
        <S.Context>사진 출처 : Twitter, namu.wiki</S.Context>
      </div>
    </S.Footer>
  );
};

export default Footer;
