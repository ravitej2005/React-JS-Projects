import React from "react";

function Card({ movie }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 relative">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-full object-cover"
      />
      <div className="p-4 absolute bottom-0 bg-white w-full">
        <h2 className="text-lg font-semibold text-gray-800">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>
        <p className="text-gray-500 text-sm mt-2">Type: {movie.Type}</p>
      </div>
    </div>
  );
}

export default Card;
