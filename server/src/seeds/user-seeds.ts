import { Anime } from '../models/index'; 

export const animeSeeds: Anime[] = [
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
    title: 'Death Note',
    description: 'A high school student named Light Yagami discovers a mysterious notebook that allows him to kill anyone by writing their name in it. He decides to use this power to create a world free of evil, but his actions attract the attention of an eccentric detective known as L.',
    genre: ['Thriller'],
    episodes: 37,
    status: 'Completed',
    releaseYear: 2006,
    rating: 8.6
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
  }
  // Add more anime entries as needed
];

export default animeSeeds;
