import React from "react";
import MovieCard from "./MovieCard";
import '../App.css';

const MovieList = ({ title, movies }) => {
  console.log(movies);
  
  return (
    <div>
      <h1 className="text-3xl text-white font-bold py-2">{title}</h1>
    <div className="flex overflow-x-hidden hover:overflow-x-scroll py-6 custom-scrollbar h-[260px]">
      <div className="flex">
        {movies?.map((movie, index) => (
          <MovieCard key={index} posterUrl={movie?.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
