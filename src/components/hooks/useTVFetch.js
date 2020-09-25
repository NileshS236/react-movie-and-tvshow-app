import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../config";

export const useTVFetch = (tvshowId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}tv/${tvshowId}?api_key=${API_KEY}`;
      const response = await axios.get(endpoint);
      const result = response.data;

      const creditsEndpoint = `${API_URL}tv/${tvshowId}/credits?api_key=${API_KEY}`;
      const creditsResponse = await axios.get(creditsEndpoint);
      const creditsResult = creditsResponse.data;

      setState({
        ...result,
        actors: creditsResult.cast,
      });
      console.log(state);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, loading, error];
};
