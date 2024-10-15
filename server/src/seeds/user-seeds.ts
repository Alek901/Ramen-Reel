
import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', email: 'jolly@guru.com', password: 'password' },
    { username: 'SunnyScribe', email: 'sunny@scribe.com', password: 'password' },
    { username: 'RadiantComet', email: 'radiant@comet.com', password: 'password' },
  ], { individualHooks: true });
};

import { User } from '../models/user';

const seedUserData = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },

];

const seedUsers = async (): Promise<void> => {
  try {
    await User.bulkCreate(seedUserData);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

export default seedUsers;
