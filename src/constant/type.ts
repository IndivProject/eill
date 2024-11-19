interface IAlbumSongInfo {
  name: string;
  url: string;
}

export interface IAlbum {
  image: string;
  url: string;
  title: string;
  date: string;
  songs: IAlbumSongInfo[];
}

export interface ISingle {
  image: string;
  title: string;
  date: string;
  url: string;
  lyrics?: string;
}
