import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{

    const movies = useSelector(store=>store.movies);
    console.log(movies);
    return(
        <div className=" bg-black">
            <div className="-mt-52 pl-8 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRated} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            </div>
            
        </div>
    )
};

export default SecondaryContainer;