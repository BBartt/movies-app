export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_NEW_PAGE_SUCCESS = "FETCH_NEW_PAGE_SUCCESS";
export const FETCH_MOVIE_INFO_SUCCESS = "FETCH_MOVIE_INFO_SUCCESS";

export const FETCH_NOW_PLAYING_SUCCESS = "FETCH_NOW_PLAYING_SUCCESS";
export const FETCH_MOVIE_CATEGORY_SUCCESS = "FETCH_MOVIE_CATEGORY_SUCCESS";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const MORE_POSTS = "MORE_POSTS";
export const RESET_MORE_POSTS = "RESET_MORE_POSTS";
export const CHANGE_PLACEHOLDER = "CHANGE_PLACEHOLDER";

export const APIKEY = "?api_key=47fcdfc3568c424d39ad5b87c5b3272b";
export const baseURL = `https://api.themoviedb.org/3/`;

export const fetchBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});
export const fetchMoviesSuccess = (items, movieGenre) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: items,
  movieGenre: movieGenre
});
export const fetchNewPageSuccess = items => ({
  type: FETCH_NEW_PAGE_SUCCESS,
  payload: items
});
export const fetchMovieInfoSuccess = items => ({
  type: FETCH_MOVIE_INFO_SUCCESS,
  payload: items
});
export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error
});
export const fetchGenresSuccess = items => ({
  type: FETCH_GENRES_SUCCESS,
  payload: items
});
export const fetchMovieNowPlayingSuccess = items => ({
  type: FETCH_NOW_PLAYING_SUCCESS,
  payload: items
});
export const fetchMovieCategorySuccess = items => ({
  type: FETCH_MOVIE_CATEGORY_SUCCESS,
  payload: items
});

export function fetchMoviesGenresForNavBar() {
  return dispatch => {
    dispatch(fetchBegin());
    return fetch(baseURL + "genre/list" + APIKEY)
      .then(handleErrors)
      .then(res => res.json())
      .then(items => {
        dispatch(fetchGenresSuccess(items));
        return items;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

export function fetchMovieNowPlaying() {
  return dispatch => {
    dispatch(fetchBegin());
    return fetch(baseURL + "movie/now_playing" + APIKEY)
      .then(handleErrors)
      .then(res => res.json())
      .then(items => {
        dispatch(fetchMovieNowPlayingSuccess(items));
        return items;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

export function fetchMovieCategory(category) {
  return dispatch => {
    dispatch(fetchBegin());
    return fetch(baseURL + category + APIKEY)
      .then(handleErrors)
      .then(res => res.json())
      .then(items => {
        dispatch(fetchMovieCategorySuccess(items));
        return items;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

export function fetchMoviesByGenre(movieGenre) {
  return dispatch => {
    dispatch(fetchBegin());
    return fetch(
      baseURL + "discover/movie" + APIKEY + "&with_genres=" + movieGenre.id
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(items => {
        dispatch(fetchMoviesSuccess(items, movieGenre));
        return items;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

export function fetchMovieInfo(movieId) {
  return dispatch => {
    dispatch(fetchBegin());
    return fetch(baseURL + `movie/${movieId}${APIKEY}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(items => {
        dispatch(fetchMovieInfoSuccess(items));
        return items;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
