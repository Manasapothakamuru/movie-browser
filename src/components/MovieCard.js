import React, { useState } from 'react';

export default function MovieCard({ movie }) {
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <section className='movie--details'>
      <div className='movie--card'>
        <img src={movie.poster_path} className='movie--img' alt={movie.title} width={130} />
        <h1 className='movie--title'>Title: {movie.title}</h1>
        <h2 className='movie--genre'>Genre: {movie.genres.map(genre => genre.name).join(', ')}</h2>
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
}