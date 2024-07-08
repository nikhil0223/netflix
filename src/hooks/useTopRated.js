import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import {  addTopRated } from "../utilities/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
