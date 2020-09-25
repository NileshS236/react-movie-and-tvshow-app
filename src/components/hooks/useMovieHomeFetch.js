import { useState, useEffect } from "react";
import axios from "axios";
import { POPULAR_MOVIE_BASE_URL } from "../../config";

export const useMovieHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const response = await axios.get(endpoint);
      const result = response.data;
      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${POPULAR_MOVIE_BASE_URL}`);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
