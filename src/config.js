// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "21fc249cc7d67c123398dca3ea922ab4";

const SEARCH_MOVIE_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_MOVIE_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const SEARCH_TV_BASE_URL = `${API_URL}search/tv?api_key=${API_KEY}&query=`;
const POPULAR_TV_BASE_URL = `${API_URL}tv/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_MOVIE_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  POPULAR_TV_BASE_URL,
};
