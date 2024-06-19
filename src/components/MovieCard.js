import React from "react";
import { MOVIE_POSTER_URL } from "../utilities/constants";

const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-40 pr-4">
      <img className="w-40" alt="movieUrl" src={MOVIE_POSTER_URL + posterUrl} />
    </div>
  );
};

export default MovieCard;
