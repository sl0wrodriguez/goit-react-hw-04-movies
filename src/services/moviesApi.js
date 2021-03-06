import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'eef1cd881f885cf39765ac4359f8bbb0';

const getMovieTrends = page => {
  return axios
    .get(`trending/movie/week?api_key=${API_KEY}&page=${page}`);
};

const getMovieByQuery = ({ query, page }) => {
  return axios
    .get(`search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`,)
    .then(response => response.data.results);
};

const getMoviesDetail = movieId => {
  return axios
    .get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
};

const getMovieCast = movieId => {
  return axios
    .get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,);
};

const getMovieReview = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,);
};
// eslint-disable-next-line
export default {
  getMovieTrends,
  getMovieByQuery,
  getMoviesDetail,
  getMovieCast,
  getMovieReview,
};
