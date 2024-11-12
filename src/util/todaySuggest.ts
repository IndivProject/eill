import { SuggestSong } from "../constant/Suggest";

export const TodaySuggest = (): number => {
  let num: number = 0;
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();

  num = (year + month * day + date) % SuggestSong.length;
  return num;
};
