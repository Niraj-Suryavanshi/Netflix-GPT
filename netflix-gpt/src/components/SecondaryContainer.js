import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("all movies", movies);
  return (
    movies && (
      <div className="bg-black w-screen ">
        <div className="-mt-52 relative pl-12 z-10 pr-12 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Trending Movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
