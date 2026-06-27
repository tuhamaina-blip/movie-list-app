import { useState } from 'react';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi' },
    { id: 2, title: 'The Lion King', year: 1994, genre: 'Animation' },
    { id: 3, title: 'Parasite', year: 2019, genre: 'Thriller' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newGenre, setNewGenre] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newMovie = {
      id: Date.now(),
      title: newTitle,
      year: newYear,
      genre: newGenre,
    };

    setMovies([...movies, newMovie]);
    setNewTitle('');
    setNewYear('');
    setNewGenre('');
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">My Movie List</h1>

      <form onSubmit={handleAddMovie} className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-2 py-1.5 text-sm"
        />
        <input
          type="text"
          placeholder="Year"
          value={newYear}
          onChange={(e) => setNewYear(e.target.value)}
          className="w-20 border border-gray-300 rounded-md px-2 py-1.5 text-sm"
        />
        <input
          type="text"
          placeholder="Genre"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          className="w-28 border border-gray-300 rounded-md px-2 py-1.5 text-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white text-sm rounded-md px-3 py-1.5 hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <MovieList movies={movies} onDelete={handleDeleteMovie} />
    </div>
  );
}

export default App;