import React, { useEffect, useState } from "react";
import { IAlbum } from "../../../constant/type";
import { Album } from "../../../constant/Album";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import YouTube from "react-youtube";
import * as S from "../style";
import useGetBrWidth from "../../../hooks/useGetBrWidth";

const AlbumDetail = () => {
  const { checkWidth } = useGetBrWidth();
  const navigate = useNavigate();
  const params = useParams();
  const AlbumInfo: IAlbum = Album[Number(params.idx)];

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const setPlayState = (val: boolean) => setIsPlay(val);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (params.detail) setIndex(Number(params.detail));
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.MainWrap isMoblie={checkWidth()}>
      <S.SongWrap>
        <S.AlbumButtonWrap>
          <S.AlbumWrap isMoblie={checkWidth()}>
            <S.AlbumCover
              src={AlbumInfo.image}
              alt=""
              isMoblie={checkWidth()}
            />
            <S.AlbumCenter isMoblie={checkWidth()} />
            <S.SongImg
              isPlay={isPlay}
              src={AlbumInfo.image}
              alt="image"
              isMoblie={checkWidth()}
            />
            <S.AlbumBackground src={AlbumInfo.image} isMoblie={checkWidth()} />
          </S.AlbumWrap>
          <Button context="돌아가기" onClick={() => navigate("/")} />
          {checkWidth() && (
            <S.MoblieYoutubeBox>
              <YouTube
                videoId={AlbumInfo.songs[index].url}
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
          <S.AlbumListWrap isMoblie={checkWidth()}>
            {AlbumInfo.songs.map((e, idx) => (
              <S.AlbumSongWrap
                isMoblie={checkWidth()}
                isActive={idx == index}
                onClick={() => {
                  setIsPlay(false);
                  setIndex(idx);
                }}
              >
                <S.AlbumSongName isMoblie={checkWidth()}>
                  {e.name}
                </S.AlbumSongName>
                {!checkWidth() && idx == index && <S.AlbumActiveState />}
              </S.AlbumSongWrap>
            ))}
          </S.AlbumListWrap>
        </S.AlbumButtonWrap>
        <S.TitleWrap isMoblie={checkWidth()}>
          <S.Title isMoblie={checkWidth()}>
            {AlbumInfo.songs[index].name}
          </S.Title>
          <S.SubTitle isMoblie={checkWidth()}>{AlbumInfo.title}</S.SubTitle>
          <S.Line />
          <S.Lyrics isMoblie={checkWidth()}>{AlbumInfo.date}</S.Lyrics>
          <S.SubTitle isMoblie={checkWidth()}>가사</S.SubTitle>
          <S.LyricsWrap isMoblie={checkWidth()}>
            {AlbumInfo.songs[index].lyrics &&
            AlbumInfo.songs[index].lyrics != "" ? (
              AlbumInfo.songs[index].lyrics
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
                videoId={AlbumInfo.songs[index].url}
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

export default AlbumDetail;
