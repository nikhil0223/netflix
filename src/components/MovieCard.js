import React from "react";
import { MOVIE_POSTER_URL } from "../utilities/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-40 pr-4">
      <Link>
        <img
          className="w-40 object-cover"
          alt="movieUrl"
          src={MOVIE_POSTER_URL + posterUrl}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
