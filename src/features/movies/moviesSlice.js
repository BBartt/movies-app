import * as types from "./moviesTypes";

export const initialState = {
  loading: false,
  error: null,
  movies: [],
  isBootstrapped: false,
  moviesNowPlaying: [],
  movieInfo: null,
  movieGenreNumber: null,
  movieGenreInfo: [],
};

const moviesReducer = (state = initialState, action) => {
  console.log("moviesReducer >>>", { state, action });

  switch (action.type) {
    case types.FETCH_REQUEST:
      return { ...state, loading: true, error: null };

    case types.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        isBootstrapped: true,
        movieGenreInfo: action.payload.genres || action.payload,
      };

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: 1,
        movies: action.payload.results || action.payload,
        movieGenreNumber: action.genre?.id || null,
      };

    case types.FETCH_NEW_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results || action.payload,
      };

    case types.FETCH_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesNowPlaying: action.payload.results || action.payload,
      };

    case types.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results || action.payload,
      };

    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movieInfo: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
