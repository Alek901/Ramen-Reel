import { Anime } from "../models";

export const seedUsers: Anime[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    description: 'In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason, a young boy named Eren Yeager vows to rid the world of the Titan threat and exact revenge after a tragic event in his childhood.',
    genre: ['Action'],
    episodes: 75,
    status: 'Completed',
    releaseYear: 2013,
    rating: 9.0
  },
{
  id: 2,
  title: 'Tokyo Ghoul',
  description: 'Ken Kaneki, a college student, survives an encounter with a ghoul and becomes a half-ghoul himself. He must navigate the complex world of ghouls while struggling to maintain his humanity and protect those he cares about.',
  genre: ['Thriller'],
  episodes: 48,
  status: 'Completed',
  releaseYear: 2014,
  rating: 7.9
},
  {
    id: 3,
    title: 'My Hero Academia',
    description: 'In a world where people with superpowers (known as "Quirks") are the norm, a boy named Izuku Midoriya has big dreams of becoming a superhero, despite being born Quirkless. After a chance encounter with the greatest hero of all time, All Might, Izuku\'s journey to become a hero begins.',
    genre: ['Action'],
    episodes: 113,
    status: 'Ongoing',
    releaseYear: 2016,
    rating: 8.4
  },
  {
    id: 4,
    title: 'Naruto',
    description: 'It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.',
    genre: ['Action'],
    episodes: 220,
    status:'Completed',
    releaseYear: 2022,
    rating: 8.0
  }
  // Add more anime entries as needed
];
