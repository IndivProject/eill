import { Album } from "./Album";

export interface ISuggestSong {
  title: string;
  album: string;
  date: string;
  url: string;
  introduce: string;
  image: string;
  index: number;
  detailIndex: number;
}

export const SuggestSong: ISuggestSong[] = [
  {
    title: Album[0].songs[0].name,
    album: Album[0].title,
    date: Album[0].date,
    url: Album[0].songs[0].name,
    introduce: "힘이 나는 곡",
    image: Album[0].image,
    index: 0,
    detailIndex: 0,
  },
  {
    title: Album[0].songs[1].name,
    album: Album[0].title,
    date: Album[0].date,
    url: Album[0].songs[1].name,
    introduce: "뭔가를 원할 때 듣는 곡",
    image: Album[0].image,
    index: 0,
    detailIndex: 1,
  },
  {
    title: Album[0].songs[3].name,
    album: Album[0].title,
    date: Album[0].date,
    url: Album[0].songs[3].name,
    introduce: "마음의 치유를 받을 때 듣는 곡",
    image: Album[0].image,
    index: 0,
    detailIndex: 3,
  },
  {
    title: Album[1].songs[1].name,
    album: Album[1].title,
    date: Album[1].date,
    url: Album[1].songs[1].name,
    introduce: "신날때, 텐션을 올리고 싶을 때",
    image: Album[1].image,
    index: 1,
    detailIndex: 1,
  },
  {
    title: Album[1].songs[3].name,
    album: Album[1].title,
    date: Album[1].date,
    url: Album[1].songs[3].name,
    introduce: "행복해지는 노래",
    image: Album[1].image,
    index: 1,
    detailIndex: 3,
  },

  {
    title: Album[2].songs[0].name,
    album: Album[2].title,
    date: Album[2].date,
    url: Album[2].songs[0].name,
    introduce: "신나는 노래 원탑",
    image: Album[2].image,
    index: 0,
    detailIndex: 0,
  },
  {
    title: Album[2].songs[3].name,
    album: Album[2].title,
    date: Album[2].date,
    url: Album[2].songs[3].name,
    introduce: "정신차릴때 듣는 노래",
    image: Album[2].image,
    index: 2,
    detailIndex: 0,
  },
  {
    title: Album[3].songs[0].name,
    album: Album[3].title,
    date: Album[3].date,
    url: Album[3].songs[0].name,
    introduce: "제일 좋은 노래",
    image: Album[3].image,
    index: 3,
    detailIndex: 0,
  },
  {
    title: Album[3].songs[7].name,
    album: Album[3].title,
    date: Album[3].date,
    url: Album[3].songs[7].name,
    introduce: "여행갈 때, 차분해지는 노래",
    image: Album[3].image,
    index: 3,
    detailIndex: 7,
  },
  {
    title: Album[4].songs[0].name,
    album: Album[4].title,
    date: Album[4].date,
    url: Album[4].songs[0].name,
    introduce: "춤 추고 싶을때",
    image: Album[4].image,
    index: 4,
    detailIndex: 0,
  },
];
