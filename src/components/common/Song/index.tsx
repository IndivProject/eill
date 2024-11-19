import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

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
  const [isHover, setIsHover] = useState<boolean>(false);
  const navigate = useNavigate();

  const MoveDetailPage = () =>
    navigate(`/${isAlbum ? "album" : "single"}/${idx}${isAlbum && "/0"}`);

  return (
    <S.MainWrap
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <S.ImageWrap onClick={MoveDetailPage}>
        {
          <S.ImageFilter isHover={isHover}>
            <S.DetailContext>자세히 보기</S.DetailContext>
          </S.ImageFilter>
        }
        <S.Image src={image} alt="image" />
      </S.ImageWrap>
      <S.ContextWrap>
        <S.Context isHover={isHover} onClick={MoveDetailPage}>
          {title}
        </S.Context>
        <S.Context>{date}</S.Context>
        <S.Context>
          {inviteSong}
          {isAlbum && (
            <>
              ,<br />
              {inviteSong2} ...
            </>
          )}
        </S.Context>
      </S.ContextWrap>
    </S.MainWrap>
  );
};

export default Song;
