import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Single } from "../../../constant/Single";
import { ISingle } from "../../../constant/type";
import Button from "../../../components/common/Button";
import YouTube from "react-youtube";
import * as S from "../style";
import useGetBrWidth from "../../../hooks/useGetBrWidth";

const SingleDetail = () => {
  const { checkWidth } = useGetBrWidth();
  const navigate = useNavigate();
  const params = useParams();
  const SingleInfo: ISingle = Single[Number(params.idx)];

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const setPlayState = (val: boolean) => setIsPlay(val);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.MainWrap isMoblie={checkWidth()}>
      <S.SongWrap>
        <S.AlbumButtonWrap>
          <S.AlbumWrap isMoblie={checkWidth()}>
            <S.AlbumCover
              src={SingleInfo.image}
              alt=""
              isMoblie={checkWidth()}
            />
            <S.AlbumCenter isMoblie={checkWidth()} />
            <S.SongImg
              isPlay={isPlay}
              src={SingleInfo.image}
              alt="image"
              isMoblie={checkWidth()}
            />
            <S.AlbumBackground src={SingleInfo.image} isMoblie={checkWidth()} />
          </S.AlbumWrap>
          <Button context="돌아가기" onClick={() => navigate("/")} />{" "}
          {checkWidth() && (
            <S.MoblieYoutubeBox>
              <YouTube
                videoId={SingleInfo.url}
                opts={{
                  width: "180",
                  height: "120",
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
            </S.MoblieYoutubeBox>
          )}
        </S.AlbumButtonWrap>
        <S.TitleWrap isMoblie={checkWidth()}>
          <S.Title isMoblie={checkWidth()}>{SingleInfo.title}</S.Title>
          <S.Line />
          <S.Lyrics isMoblie={checkWidth()}>{SingleInfo.date}</S.Lyrics>

          <S.SubTitle isMoblie={checkWidth()}>가사</S.SubTitle>
          <S.LyricsWrap isMoblie={checkWidth()}>
            {SingleInfo.lyrics ? (
              SingleInfo.lyrics
                .split("=")
                .map((e) => (
                  <S.Lyrics isMoblie={checkWidth()}>
                    {e == "" ? "ㅤ" : e}
                  </S.Lyrics>
                ))
            ) : (
              <S.Lyrics isMoblie={checkWidth()}>가사 정보 없음</S.Lyrics>
            )}
          </S.LyricsWrap>
        </S.TitleWrap>
        {!checkWidth() && (
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
        )}
      </S.SongWrap>
    </S.MainWrap>
  );
};

export default SingleDetail;
