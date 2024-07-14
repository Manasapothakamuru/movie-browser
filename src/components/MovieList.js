import React from 'react';
import MovieCard from './MovieCard';

const moviesData = [
  {
    title: "Inception",
    poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    genres: [
      { id: 28, name: "Action" },
    ],
    overview: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable...",
    vote_average: 8.3,
  },
  {
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genres: [
      { id: 80, name: "Crime" },
    ],
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets...",
    vote_average: 8.4,
  },
  {
    title: "Interstellar",
    poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    genres: [
      { id: 878, name: "Science Fiction" },
    ],
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage...",
    vote_average: 8.1,
  },
  {
    title: "The Matrix",
    poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genres: [
      { id: 28, name: "Action" },
    ],
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers...",
    vote_average: 8.7,
  },
  {
    title: "The Shawshank Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    genres: [
      { id: 80, name: "Crime" },
    ],
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden...",
    vote_average: 8.7,
  }
];

export default function MovieList() {
  return (
    <div className='movie--list'>
      {moviesData.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
