import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Header from './Header';
import Footer from './Footer';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://50.18.95.215:8000/api/movies/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className='movie--list-container'>
      <Header onSearch={handleSearch} />
      {error && <p>Error: {error}</p>}
      <div className='movie--list'>
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
