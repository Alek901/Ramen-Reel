export interface Anime {
  id: number;
  title: string;
  description: string;
  genre: string[];
  episodes: number;
  status: 'Ongoing' | 'Completed';
  releaseYear: number;
  rating: number;
}
