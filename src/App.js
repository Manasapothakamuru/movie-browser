import React from 'react';
import MovieList from './components/MovieList';
import './styles.css'; 
function App() {
  return (
    <div className="App">
      <h1 className="header--title">Movie Library</h1>
      <MovieList />
    </div>
  );
}

export default App;
