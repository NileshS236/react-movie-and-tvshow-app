import React, { useState } from "react";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_MOVIE_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
} from "../config";

// Import Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import NavBar from "./elements/NavBar";

// Custom Hooks
import { useMovieHomeFetch } from "./hooks/useMovieHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { movies, heroImage, currentPage, totalPages },
      loading,
      error,
    },
    fetchMovies,
  ] = useMovieHomeFetch();

  const [searchTerm, setSearchTrem] = useState("");

  const searchMovies = (search) => {
    const endpoint = search
      ? `${SEARCH_MOVIE_BASE_URL}${search}`
      : POPULAR_MOVIE_BASE_URL;
    setSearchTrem(search);

    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_MOVIE_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_MOVIE_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong...</div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          overview={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <NavBar />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieOverview={movie.overview}
            movieRating={movie.vote_average}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
