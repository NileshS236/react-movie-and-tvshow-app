import { useState, useEffect } from "react";
import axios from "axios";
import { POPULAR_TV_BASE_URL } from "../../config";

export const useTVHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ tvshows: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchShows = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const response = await axios.get(endpoint);
      const result = response.data;
      setState((prev) => ({
        ...prev,
        tvshows:
          isLoadMore !== -1
            ? [...prev.tvshows, ...result.results]
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
    fetchShows(`${POPULAR_TV_BASE_URL}`);
  }, []);

  return [{ state, loading, error }, fetchShows];
};
