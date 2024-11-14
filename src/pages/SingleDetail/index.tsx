import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Single } from "../../constant/Single";
import { ISingle } from "../../constant/type";
import Button from "../../components/common/Button";
import YouTube from "react-youtube";
import * as S from "./style";

const SingleDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const SingleInfo: ISingle = Single[Number(params.idx)];

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const setPlayState = (val: boolean) => setIsPlay(val);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.MainWrap>
      <S.SongWrap>
        <S.AlbumButtonWrap>
          <S.AlbumWrap>
            <S.AlbumCover src={SingleInfo.image} alt="" />
            <S.AlbumCenter />
            <S.SongImg isPlay={isPlay} src={SingleInfo.image} alt="image" />
            <S.AlbumBackground src={SingleInfo.image} />
          </S.AlbumWrap>
          <Button context="돌아가기" onClick={() => navigate("/")} />
        </S.AlbumButtonWrap>
        <div>
          <S.Title>{SingleInfo.title}</S.Title>
          <S.Line />
          <S.Lyrics>{SingleInfo.date}</S.Lyrics>

          <S.SubTitle>가사</S.SubTitle>
          <p>
            {SingleInfo.lyrics ? (
              SingleInfo.lyrics
                .split("=")
                .map((e) => <S.Lyrics>{e == "" ? "ㅤ" : e}</S.Lyrics>)
            ) : (
              <S.Lyrics>가사 정보 없음</S.Lyrics>
            )}
          </p>
        </div>
        <S.YoutubeBoxWrap>
          <S.YoutubeBox>
            <YouTube
              videoId={SingleInfo.url}
              opts={{
                width: "560",
                height: "315",
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              onPlay={() => setPlayState(true)}
              onPause={() => setPlayState(false)}
              onEnd={(e: any) => {
                e.target.stopVideo(0);
              }}
            />
          </S.YoutubeBox>
        </S.YoutubeBoxWrap>
      </S.SongWrap>
    </S.MainWrap>
  );
};

export default SingleDetail;
