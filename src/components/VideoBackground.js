import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Shimmer from "../utilities/Shimmer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  return (
    <div>
      {
        trailerVideo ? <iframe
        className="w-[100%]  aspect-video "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&cc_load_policy=1&iv_load_policy=3"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> : <Shimmer />
      }
      
    </div>
  );
};

export default VideoBackground;
