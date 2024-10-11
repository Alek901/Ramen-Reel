export interface Anime {
  id: string;
  title: string;
  thumbnailUrl: string;
}

export interface WatchedAnime extends Anime {
  watchedDate: Date;
}