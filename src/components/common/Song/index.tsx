import React, { useState } from "react";
import * as S from "./style";

interface IAlbum {
  image: string;
  title: string;
  date: string;
  inviteSong: string;
  inviteSong2?: string;
  isAlbum?: boolean;
}

const Song = ({
  image,
  title,
  date,
  inviteSong,
  inviteSong2,
  isAlbum,
}: IAlbum) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <S.MainWrap>
      <S.ImageWrap
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {
          <S.ImageFilter isHover={isHover}>
            <S.DetailContext>자세히 보기</S.DetailContext>
          </S.ImageFilter>
        }
        <S.Image src={image} alt="image" />
      </S.ImageWrap>
      <S.ContextWrap>
        <S.Context>{title}</S.Context>
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
