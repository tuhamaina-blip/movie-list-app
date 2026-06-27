function MovieItem({ movie, onDelete }) {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3">
      <div>
        <h3 className="font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.year} · {movie.genre}</p>
      </div>
      <button
        onClick={() => onDelete(movie.id)}
        className="bg-red-500 text-white text-sm rounded-md px-3 py-1.5 hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default MovieItem;