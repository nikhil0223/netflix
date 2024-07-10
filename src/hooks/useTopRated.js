import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addTopRated } from "../utilities/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch("https://netflix-backend-lime.vercel.app/movies/list",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({cat:'top_rated'}),
    });
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
