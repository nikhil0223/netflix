import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilities/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const getNowPlayingMovies = async () => {
    const data = await fetch(`https://netflix-backend-lime.vercel.app/hero`);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
