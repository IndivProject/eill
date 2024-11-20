import React, { useEffect, useState } from "react";
import { IAlbum } from "../../../constant/type";
import { Album } from "../../../constant/Album";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import YouTube from "react-youtube";
import * as S from "../style";

const AlbumDetail = () => {
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
    <S.MainWrap>
      <S.SongWrap>
        <S.AlbumButtonWrap>
          <S.AlbumWrap>
            <S.AlbumCover src={AlbumInfo.image} alt="" />
            <S.AlbumCenter />
            <S.SongImg isPlay={isPlay} src={AlbumInfo.image} alt="image" />
            <S.AlbumBackground src={AlbumInfo.image} />
          </S.AlbumWrap>
          <Button context="돌아가기" onClick={() => navigate("/")} />
          <div>
            {AlbumInfo.songs.map((e, idx) => (
              <S.AlbumSongWrap
                isActive={idx == index}
                onClick={() => {
                  setIsPlay(false);
                  setIndex(idx);
                }}
              >
                <S.AlbumSongName>{e.name}</S.AlbumSongName>
                {idx == index && <S.AlbumActiveState />}
              </S.AlbumSongWrap>
            ))}
          </div>
        </S.AlbumButtonWrap>
        <S.TitleWrap>
          <S.Title>{AlbumInfo.songs[index].name}</S.Title>
          <S.SubTitle>{AlbumInfo.title}</S.SubTitle>
          <S.Line />
          <S.Lyrics>{AlbumInfo.date}</S.Lyrics>

          <S.SubTitle>가사</S.SubTitle>
          <p>
            {AlbumInfo.songs[index].lyrics &&
            AlbumInfo.songs[index].lyrics != "" ? (
              AlbumInfo.songs[index].lyrics
                .split("=")
                .map((e) => <S.Lyrics>{e == "" ? "ㅤ" : e}</S.Lyrics>)
            ) : (
              <S.Lyrics>가사 정보 없음</S.Lyrics>
            )}
          </p>
        </S.TitleWrap>
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
      </S.SongWrap>
    </S.MainWrap>
  );
};

export default AlbumDetail;
