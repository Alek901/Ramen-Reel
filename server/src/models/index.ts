import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';

const User = UserFactory(sequelize);

export { User };


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
