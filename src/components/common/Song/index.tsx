import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useGetBrWidth from "../../../hooks/useGetBrWidth";

interface IAlbum {
  image: string;
  title: string;
  date: string;
  idx: number;
  inviteSong: string;
  inviteSong2?: string;
  isAlbum?: boolean;
}

const Song = ({
  image,
  title,
  date,
  idx,
  inviteSong,
  inviteSong2,
  isAlbum,
}: IAlbum) => {
  const { checkWidth } = useGetBrWidth();
  const [isHover, setIsHover] = useState<boolean>(false);
  const navigate = useNavigate();

  const MoveDetailPage = () =>
    navigate(`/${isAlbum ? "album" : "single"}/${idx}`);

  return (
    <S.MainWrap
      isMoblie={checkWidth()}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <S.ImageWrap onClick={MoveDetailPage} isMoblie={checkWidth()}>
        {!checkWidth() && (
          <S.ImageFilter isHover={isHover}>
            <S.DetailContext>자세히 보기</S.DetailContext>
          </S.ImageFilter>
        )}
        <S.Image src={image} alt="image" />
      </S.ImageWrap>
      <S.ContextWrap isMoblie={checkWidth()}>
        <S.Context
          isMoblie={checkWidth()}
          isHover={isHover}
          onClick={MoveDetailPage}
        >
          {title}
        </S.Context>
        <S.Context isMoblie={checkWidth()}>{date}</S.Context>
        {!checkWidth() && (
          <S.Context isMoblie={checkWidth()}>
            {inviteSong}
            {isAlbum && (
              <>
                ,<br />
                {inviteSong2} ...
              </>
            )}
          </S.Context>
        )}
      </S.ContextWrap>
    </S.MainWrap>
  );
};

export default Song;
