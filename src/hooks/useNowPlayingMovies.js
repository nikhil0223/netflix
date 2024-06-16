import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/firebase";
import { MOVIEDB_URL } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilities/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIEDB_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
