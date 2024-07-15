import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Header from './Header';
import Footer from './Footer';


const moviesData = [
  {
    title: "Inception",
    poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    genres: [{ id: 28, name: "Action" }],
    overview: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable...",
    vote_average: 8.3,
  },
  {
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genres: [{ id: 80, name: "Crime" }],
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets...",
    vote_average: 8.4,
  },
  {
    title: "The Matrix",
    poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genres: [{ id: 28, name: "Action" }],
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers...",
    vote_average: 8.7,
  },
  {
    title: "The Shawshank Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    genres: [{ id: 80, name: "Crime" }],
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden...",
    vote_average: 8.7,
  },
  {
    title: "Pulp Fiction",
    poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    genres: [{ id: 80, name: "Crime" }],
    overview: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    vote_average: 8.9,
  },
  {
    title: "Forrest Gump",
    poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    genres: [{ id: 35, name: "Comedy" }],
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    vote_average: 8.8,
  },
  {
    title: "Avatar",
    poster_path: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    genres: [{ id: 28, name: "Action" }],
    overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    vote_average: 7.9,
  },
  {
    title: "The Godfather",
    poster_path: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    genres: [{ id: 80, name: "Crime" }],
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    vote_average: 9.2,
  },
];



export default function MovieList() {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleSearch = (searchTerm) => {
    const filtered = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className='movie--list-container'>
      <Header onSearch={handleSearch} />
      <div className='movie--list'>
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
