import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utilities/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch("https://netflix-backend-lime.vercel.app/movies/list",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({cat:'upcoming'}),
    });
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
