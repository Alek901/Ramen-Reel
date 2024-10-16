export interface UserData {
  id: number | null;
  username: string;
  email: string;
}

export interface UserPreferences {
  subtitleLanguage: string;
  autoplayNextEpisode: boolean;
  dubPreference: 'sub' | 'dub';
  preferredGeneres: string;
}

export interface UserStatictics {
  favoriteGeneres: string;
  totalWatchedEpisodes: number;
  mostWatchGeneres: number;
  totalminutesWatched: number;
}

export interface AnimeList {
name: string;
description: string;
catagories: string;
totalEpisodes: string;
}
