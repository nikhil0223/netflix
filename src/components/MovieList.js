import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="px-6">
        <h1 className="text-3xl text-white font-bold py-2">{title}</h1>
        <div className="flex overflow-x-hidden hover:overflow-x-scroll py-2">
          <div className="flex ">
            {movies?.map((movie, index) => (
              <MovieCard key={index} posterUrl={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
