import { IAlbum } from "./type";
import SpotLight from "../asset/Songs/Album/Spotlight.webp";
import Palette from "../asset/Songs/Album/Palette.webp";
import Makuake from "../asset/Songs/Album/Makuake.webp";
import Loveliekhate from "../asset/Songs/Album/Loveliekhate.webp";
import MyDreamBox from "../asset/Songs/Album/MyDreamBox.webp";
import Finale from "../asset/Songs/Album/finale.webp";
import { AlbumLyrics, EtcLyrics } from "./Lyrics";

export const EtcAlbum: IAlbum[] = [
  {
    image: Finale,
    url: "https://www.youtube.com/playlist?list=OLAK5uy_lXbQqiCiFcpKG_Da6FxxhCDqR47TrvrSo",
    title: "プレロマンス/フィナーレ。",
    date: "2022. 09. 07.",
    songs: [
      { name: "プレロマンス", url: "IG7sBQXJWNs", lyrics: EtcLyrics.Finale[0] },
      { name: "フィナーレ。", url: "1lYb9nLO_FY", lyrics: EtcLyrics.Finale[1] },
      { name: "片っぽ (Acoustic Version)", url: "Qi2BgHP0MrI", lyrics: "" },
      { name: "プレロマンス (Instrumental)", url: "Dl7iBK11OVI", lyrics: "" },
      { name: "フィナーレ。 (Instrumental)", url: "U1JqeDljGh4", lyrics: "" },
    ],
  },
];

export const Album: IAlbum[] = [
  {
    image: MyDreamBox,
    url: "https://www.youtube.com/playlist?list=OLAK5uy_m1l9ig-Klycf65Zd9ibLSgYp4cfijmkLc",
    title: "my dream box",
    date: "2024. 10. 09.",
    songs: [
      {
        name: "kakumei Zenya",
        url: "LjkIuPcXX1U",
        lyrics: AlbumLyrics.MyDreamBox[0],
      },
      {
        name: "happy ever after",
        url: "QH0YHGMChf0",
        lyrics: AlbumLyrics.MyDreamBox[1],
      },
      {
        name: "Finale.",
        url: "1lYb9nLO_FY",
        lyrics: AlbumLyrics.MyDreamBox[2],
      },
      {
        name: "Baby, with u",
        url: "aCCjYBzbYR8",
        lyrics: AlbumLyrics.MyDreamBox[3],
      },
      { name: "77", url: "xRq4SyWAmVY", lyrics: AlbumLyrics.MyDreamBox[4] },
      {
        name: "HIGHLIGHT",
        url: "jOT2uZBnz4c",
        lyrics: AlbumLyrics.MyDreamBox[5],
      },
      {
        name: "happy ending",
        url: "Vsjl5gUCQmw",
        lyrics: AlbumLyrics.MyDreamBox[6],
      },
      { name: "BAE", url: "ZmkhvWFGJMQ", lyrics: AlbumLyrics.MyDreamBox[7] },
      { name: "25", url: "OSGWOWdWdt4", lyrics: AlbumLyrics.MyDreamBox[8] },
      { name: "WE ARE", url: "hBwuTm4PlM8", lyrics: AlbumLyrics.MyDreamBox[9] },
      {
        name: "CHEAT LIFE (feat.punchnello)(prod. by GRAY)",
        url: "r89Y17Ar4a4",
        lyrics: AlbumLyrics.MyDreamBox[10],
      },
      {
        name: "Pre-Romance",
        url: "IG7sBQXJWNs",
        lyrics: AlbumLyrics.MyDreamBox[11],
      },
      { name: "Suki", url: "S99N4OzL0O0", lyrics: AlbumLyrics.MyDreamBox[12] },
      {
        name: "dream box",
        url: "lR94Ke0ylLc",
        lyrics: AlbumLyrics.MyDreamBox[13],
      },
    ],
  },

  {
    image: Palette,
    url: "https://www.youtube.com/playlist?list=OLAK5uy_k8A3ZrlYmlrgrd7GVUNYMbLPleO9EvLbk",
    title: "Palette",
    date: "2022. 02. 02.",
    songs: [
      {
        name: "いけない baby",
        url: "t0q2UcCuYXU",
        lyrics: AlbumLyrics.Palette[0],
      },
      {
        name: "ここで息をして",
        url: "WkQE64jInOw",
        lyrics: AlbumLyrics.Palette[1],
      },
      { name: "23", url: "f6Q8PbD_3u8", lyrics: AlbumLyrics.Palette[2] },
      { name: "Palette", url: "q5KgTKWMWUA", lyrics: AlbumLyrics.Palette[3] },
      { name: "hikari", url: "46yOIwzuUj0", lyrics: AlbumLyrics.Palette[4] },
      {
        name: "花のように",
        url: "KQoeOuNDhIw",
        lyrics: AlbumLyrics.Palette[5],
      },
      {
        name: "プラスティック・ラブ",
        url: "ZsLjpUkHXnI",
        lyrics: AlbumLyrics.Palette[6],
      },
      {
        name: "ただのギャル",
        url: "6eXhb0yFRNk",
        lyrics: AlbumLyrics.Palette[7],
      },
      {
        name: "honey-cage",
        url: "-YzqdSQcFno",
        lyrics: AlbumLyrics.Palette[8],
      },
      {
        name: "片っぽ - Acoustic Version",
        url: "QjYrBbI3L7g",
        lyrics: AlbumLyrics.Palette[9],
      },
      { name: "letter…", url: "1uPyCfx9bW8", lyrics: AlbumLyrics.Palette[10] },
      { name: "HARU", url: "1KMP_u-Xa6Q", lyrics: AlbumLyrics.Palette[11] },
    ],
  },

  {
    image: Loveliekhate,
    url: "https://www.youtube.com/playlist?list=OLAK5uy_nnzv5Tz01UJTeX50AKhdd-VVLajharqSc",
    title: "LOVE/LIKE/HATE",
    date: "2020. 11. 04.",
    songs: [
      {
        name: "踊らせないで",
        url: "-m1IBXDZIQs",
        lyrics: AlbumLyrics.Loveliekhate[0],
      },
      {
        name: "片っぽ",
        url: "If_YLLnYYM4",
        lyrics: AlbumLyrics.Loveliekhate[1],
      },
      {
        name: "Into your dream",
        url: "dUsUmD-jsmY",
        lyrics: AlbumLyrics.Loveliekhate[2],
      },
      {
        name: "FAKE LOVE/",
        url: "nwgGZXy0wII",
        lyrics: AlbumLyrics.Loveliekhate[3],
      },
      {
        name: "Night D",
        url: "iLUy-f1-6cE",
        lyrics: AlbumLyrics.Loveliekhate[4],
      },
      {
        name: "夢の続き",
        url: "qycNFAj7Bt0",
        lyrics: AlbumLyrics.Loveliekhate[5],
      },
      { name: "2025", url: "0YEjH8Q5pw8", lyrics: AlbumLyrics.Loveliekhate[6] },
      {
        name: "SPOTLIGHT - Kan Inoue (WONK) Remix -",
        url: "jHzgh8gQaew",
        lyrics: AlbumLyrics.Loveliekhate[7],
      },
      {
        name: "with U",
        url: "_JHRWQqoOUc",
        lyrics: AlbumLyrics.Loveliekhate[8],
      },
    ],
  },
  {
    image: SpotLight,
    url: "https://www.youtube.com/watch?v=lNtaDHj5q8Q&list=OLAK5uy_mZ_rigFl8hAD250aZfcbHbjLdb_jHc2_w",
    title: "SPOTLIGHT",
    date: "2018. 10. 03.",
    songs: [
      {
        name: "SPOTLIGHT",
        url: "lNtaDHj5q8Q",
        lyrics: AlbumLyrics.SpotLight[0],
      },
      {
        name: "この夜が明けるまで",
        url: "kXlDlcH48Z0",
        lyrics: AlbumLyrics.SpotLight[1],
      },
      {
        name: "Fly me 2",
        url: "u_HyRjFnGiE",
        lyrics: AlbumLyrics.SpotLight[2],
      },
      { name: "20", url: "sZDMvAPYQuk", lyrics: AlbumLyrics.SpotLight[3] },
      { name: "Ma Boy", url: "ZRenW_-_uvg", lyrics: AlbumLyrics.SpotLight[4] },
      {
        name: "((FULLMOON))",
        url: "K8H-NqRF_3s",
        lyrics: AlbumLyrics.SpotLight[5],
      },
      {
        name: "Perfect love",
        url: "9NLjDdu0MfM",
        lyrics: AlbumLyrics.SpotLight[6],
      },
      {
        name: "Succubus",
        url: "7_jqyNHeNdM",
        lyrics: AlbumLyrics.SpotLight[7],
      },
      {
        name: "ONE LAST TIME (Prod.AmPm)",
        url: "QfJxoKzpGXc",
        lyrics: AlbumLyrics.SpotLight[8],
      },
      {
        name: "Succubus feat.Kvi Baba (grooveman Spot Remix)",
        url: "2bwUkxs-qus",
        lyrics: AlbumLyrics.SpotLight[9],
      },
      {
        name: "20 Acoustic ver",
        url: "he-xZJ6ECbU",
        lyrics: AlbumLyrics.SpotLight[10],
      },
    ],
  },
  {
    image: Makuake,
    url: "https://www.youtube.com/playlist?list=OLAK5uy_mBl_4RCBovZPwXewplXB9vhDP7eEAlsws",
    title: "MAKUAKE",
    date: "2019. 11. 06.",
    songs: [
      { name: "MAKUAKE", url: "T15hWuRrYG8", lyrics: AlbumLyrics.Makuake[0] },
      {
        name: "FUTURE WAVE",
        url: "8NMRxSrUGmw",
        lyrics: AlbumLyrics.Makuake[1],
      },
      {
        name: "ONE feat. K.vsh",
        url: "lrVXy9vKrjE",
        lyrics: AlbumLyrics.Makuake[2],
      },
      { name: "HUSH", url: "vIJhf2cY87U", lyrics: AlbumLyrics.Makuake[3] },
      {
        name: "メタモルフォーゼ パラマジーノ",
        url: "4sTIEM-8-i8",
        lyrics: AlbumLyrics.Makuake[4],
      },
      { name: "shoujo", url: "OIDTOcuZoR0", lyrics: AlbumLyrics.Makuake[5] },
      { name: "初恋", url: "J0x5msFceUk", lyrics: AlbumLyrics.Makuake[6] },
      {
        name: "special girl",
        url: "o9jdpZp6Dk8",
        lyrics: AlbumLyrics.Makuake[7],
      },
      {
        name: "HUSH-MONJOE Remix- feat. Kick a Show",
        url: "RCOHrRj99B4",
        lyrics: AlbumLyrics.Makuake[8],
      },
    ],
  },
];
