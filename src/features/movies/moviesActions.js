import * as types from "./moviesTypes";
import { BASE_URL, API_KEY } from "constants/api";

const handleErrors = (res) => {
  if (!res.ok) throw new Error(res.statusText);
  return res;
};

const fetchData = (url, successAction) => (dispatch) => {
  dispatch({ type: types.FETCH_REQUEST });
  return fetch(url)
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => dispatch(successAction(data)))
    .catch((error) =>
      dispatch({ type: types.FETCH_FAILURE, payload: error.message })
    );
};

export const fetchGenresSuccess = (genres) => ({
  type: types.FETCH_GENRES_SUCCESS,
  payload: genres,
});

export const fetchMoviesSuccess = (movies, genre) => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: movies,
  genre,
});

export const fetchMovieSuccess = (movie) => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const fetchNowPlayingSuccess = (movies) => ({
  type: types.FETCH_NOW_PLAYING_SUCCESS,
  payload: movies,
});

export const fetchCategorySuccess = (movies) => ({
  type: types.FETCH_CATEGORY_SUCCESS,
  payload: movies,
});

export const fetchNewPageSuccess = (movies) => ({
  type: types.FETCH_NEW_PAGE_SUCCESS,
  payload: movies,
});

export const fetchGenres = () =>
  fetchData(`${BASE_URL}genre/list${API_KEY}`, fetchGenresSuccess);

export const fetchNowPlayingMovies = () =>
  fetchData(`${BASE_URL}movie/now_playing${API_KEY}`, fetchNowPlayingSuccess);

export const fetchMoviesByCategory = (category) =>
  fetchData(`${BASE_URL}${category}${API_KEY}`, fetchCategorySuccess);

export const fetchMoviesByGenre = (genre, page = 1) => {
  return fetchData(
    `${BASE_URL}discover/movie${API_KEY}&with_genres=${genre}&page=${page}`,
    (data) => fetchMoviesSuccess(data, genre)
  );
};

export const fetchMovieDetails = (movieId) =>
  fetchData(`${BASE_URL}movie/${movieId}${API_KEY}`, fetchMovieSuccess);
