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
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>AlbumDetail</div>
    </>
  );
};

export default AlbumDetail;
