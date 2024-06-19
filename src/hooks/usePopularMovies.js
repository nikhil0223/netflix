import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilities/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
