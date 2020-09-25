import React, { useState } from "react";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_TV_BASE_URL,
  POPULAR_TV_BASE_URL,
} from "../config";

// Import Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import TVShowThumb from "./elements/TVShowThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import NavBar from "./elements/NavBar";

// Custom Hooks
import { useTVHomeFetch } from "./hooks/useTVHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { tvshows, heroImage, currentPage, totalPages },
      loading,
      error,
    },
    fetchShows,
  ] = useTVHomeFetch();

  const [searchTerm, setSearchTrem] = useState("");

  const searchMovies = (search) => {
    const endpoint = search
      ? `${SEARCH_TV_BASE_URL}${search}`
      : POPULAR_TV_BASE_URL;
    setSearchTrem(search);

    fetchShows(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_TV_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_TV_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchShows(endpoint);
  };

  if (error) return <div>Something went wrong...</div>;
  if (!tvshows[0]) return <Spinner />;
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
      <Grid header={searchTerm ? "Search Results" : "Popular TV Shows"}>
        {tvshows.map((tvshow) => (
          <TVShowThumb
            key={tvshow.id}
            clickable
            image={
              tvshow.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvshow.poster_path}`
                : NoImage
            }
            movieId={tvshow.id}
            movieOverview={tvshow.overview}
            movieRating={tvshow.vote_average}
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
