export interface IAlbum {
  image: string;
  url: string;
  title: string;
  date: string;
  songs: string[];
}

export interface ISingle {
  image: string;
  title: string;
  date: string;
  url: string;
  lyrics?: string;
}
