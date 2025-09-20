import { BASE_URL } from "constants";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_NOW_PLAYING_SUCCESS = "FETCH_NOW_PLAYING_SUCCESS";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const FETCH_NEW_PAGE_SUCCESS = "FETCH_NEW_PAGE_SUCCESS";
export const FETCH_MOVIE_INFO_SUCCESS = "FETCH_MOVIE_INFO_SUCCESS";

export const FETCH_MOVIE_CATEGORY_SUCCESS = "FETCH_MOVIE_CATEGORY_SUCCESS";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const MORE_POSTS = "MORE_POSTS";
export const RESET_MORE_POSTS = "RESET_MORE_POSTS";
export const CHANGE_PLACEHOLDER = "CHANGE_PLACEHOLDER";

export const API_KEY = "?api_key=47fcdfc3568c424d39ad5b87c5b3272b";

export const fetchData = (url, successAction) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  return fetch(url)
    .then(handleErrors)
    .then((res) => res.json())
    .then((data) => {
      dispatch(successAction(data));
      return data;
    })
    .catch((error) => dispatch({ type: FETCH_FAILURE, payload: error }));
};

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: genres,
});

export const fetchMoviesSuccess = (movies, genre) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
  genre,
});

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const fetchNowPlayingSuccess = (movies) => ({
  type: FETCH_NOW_PLAYING_SUCCESS,
  payload: movies,
});

export const fetchCategorySuccess = (movies) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: movies,
});

export const fetchNewPageSuccess = (items) => ({
  type: FETCH_NEW_PAGE_SUCCESS,
  payload: items,
});

export const fetchGenres = () =>
  fetchData(BASE_URL + "genre/list" + API_KEY, fetchGenresSuccess);

export const fetchNowPlayingMovies = () =>
  fetchData(BASE_URL + "movie/now_playing" + API_KEY, fetchNowPlayingSuccess);

export const fetchMoviesByCategory = (category) =>
  fetchData(BASE_URL + category + API_KEY, fetchCategorySuccess);

export const fetchMoviesByGenre = (genre) =>
  fetchData(
    BASE_URL + "discover/movie" + API_KEY + "&with_genres=" + genre.id,
    (data) => fetchMoviesSuccess(data, genre)
  );

export const fetchMovieDetails = (movieId) =>
  fetchData(BASE_URL + `movie/${movieId}${API_KEY}`, fetchMovieSuccess);

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
