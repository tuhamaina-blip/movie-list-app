import MovieItem from './MovieItem';

function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return <p className="text-gray-400">No movies yet. Add one above!</p>;
  }

  return (
    <div className="flex flex-col gap-2.5">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MovieList;