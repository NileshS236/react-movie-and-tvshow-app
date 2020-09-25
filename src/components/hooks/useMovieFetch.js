import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const response = await axios.get(endpoint);
      const result = response.data;

      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResponse = await axios.get(creditsEndpoint);
      const creditsResult = creditsResponse.data;

      const directors = creditsResult.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...result,
        actors: creditsResult.cast,
        directors,
      });
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, loading, error];
};
