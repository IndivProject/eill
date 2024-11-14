import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Album } from "../../constant/Album";
import { Single } from "../../constant/Single";
import { IAlbum, ISingle } from "../../constant/type";
import Button from "../../components/common/Button";

const SingleDetail = () => {
  const params = useParams();

  const AlbumInfo: IAlbum = Album[Number(params.idx)];
  const SingleInfo: ISingle = Single[Number(params.idx)];

  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <div>
        <p>{params.type == "1" ? AlbumInfo.title : SingleInfo.title}</p>
        <Button context="돌아가기" onClick={() => {}} />
      </div>
      <img
        src={params.type == "1" ? AlbumInfo.image : SingleInfo.image}
        alt="image"
      />
      <p>
        {params.type == "1"
          ? AlbumInfo.songs.map((e, i) => <p key={i}>{e}</p>)
          : SingleInfo.title}
      </p>
      <p>{params.type == "1" ? AlbumInfo.date : SingleInfo.date}</p>
      <p>
        {SingleInfo.lyrics ? (
          SingleInfo.lyrics.split("=").map((e) => <p>{e == "" ? "ㅤ" : e}</p>)
        ) : (
          <p>가사 정보 없음</p>
        )}
      </p>
      <Button context="들으러 가기" onClick={() => {}} />
    </>
  );
};

export default SingleDetail;
