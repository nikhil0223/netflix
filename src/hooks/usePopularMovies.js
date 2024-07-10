import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilities/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch("https://netflix-backend-lime.vercel.app/movies/list",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({cat:'popular'}),
    });
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
