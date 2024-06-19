import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.gptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch===true  ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
