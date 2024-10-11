import { User } from '../models/user';

const seedUserData = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  // Add more user objects as needed
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
