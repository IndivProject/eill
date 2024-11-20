import React from "react";
import * as S from "./style";
import EillImg from "../../../asset/Eill.webp";
import GithubImg from "../../../asset/Github.png";
import useGetBrWidth from "../../../hooks/useGetBrWidth";

const Footer = () => {
  const { checkWidth } = useGetBrWidth();
  return (
    <S.Footer isMoblie={checkWidth()}>
      <S.Logo
        src={EillImg}
        alt="logo"
        onClick={() => window.open(`https://www.youtube.com/@_eill_`, "_blank")}
        isMoblie={checkWidth()}
      />
      <div>
        <S.Context isMoblie={checkWidth()}>
          Copyright ⓒ 2024. eill All rights reserved.
        </S.Context>
        <S.Context isMoblie={checkWidth()}>
          가사 출처 : Google, genius.com
        </S.Context>
        <S.Context isMoblie={checkWidth()}>
          사진 출처 : Twitter, namu.wiki
        </S.Context>
      </div>
      <S.GitHub
        src={GithubImg}
        alt=""
        isMoblie={checkWidth()}
        onClick={() =>
          window.open(
            `https://github.com/IndivProject/eill/tree/main`,
            "_blank"
          )
        }
      />
    </S.Footer>
  );
};

export default Footer;
