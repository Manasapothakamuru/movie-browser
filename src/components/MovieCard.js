import React from 'react';
import '../styles.css'
import { useState } from 'react';

export default function MovieCard ({ movie }) {

  const genres = movie.genres ? movie.genres.split(',') : [];
  const [showOverview, setShowOverview] = useState(false); 
  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <section className='movie--details'>
      <div className='movie--card'>
        <img src={movie.poster_path} className='movie--img' alt={movie.title} width={130} />
        <h1 className='movie--title'>Title: {movie.title}</h1>
        <div className="movie--genre">
        {genres.map((genre, index) => (
          <span key={index} className="genre">{genre.trim()}</span> 
        ))}
      </div>
        <h3 className='movie--rating'>Rating: {movie.vote_average}</h3>
        {showOverview && (
          <div className='movie--overview'>
            <p>{movie.overview}</p>
          </div>
        )}
        <button className='toggle-button' onClick={toggleOverview}>
          {showOverview ? 'Hide Overview' : 'Show Overview'}
        </button>
      </div>
    </section>
  );
};


