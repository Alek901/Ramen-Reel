export interface Anime {
    id: string;
    title: string;
    thumbnailLocation: string;
  }
  
  export interface WatchedAnime extends Anime {
    isWatched: boolean;
  }
  