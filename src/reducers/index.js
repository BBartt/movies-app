import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_GENRES_SUCCESS,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_NOW_PLAYING_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  FETCH_NEW_PAGE_SUCCESS,
  INCREMENT,
  DECREMENT,
  RESET,
  MORE_POSTS,
  RESET_MORE_POSTS,
  CHANGE_PLACEHOLDER,
} from "actions";

export const initialState = {
  loading: false,
  error: null,

  movies: [],
  moviesNowPlaying: [],
  movieInfo: null,

  movieGenreNumber: null,
  movieGenreInfo: [],

  morePosts: 3,
  page: 1,
  changePlaceholder: true,

  test: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        movieGenreInfo: action.payload.genres || action.payload,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: 1,
        movies: action.payload.results || action.payload,
        movieGenreNumber: action.genre?.id || null,
      };

    case FETCH_NEW_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results || action.payload,
      };

    case FETCH_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesNowPlaying: action.payload.results || action.payload,
      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results || action.payload,
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movieInfo: action.payload,
      };

    case INCREMENT:
      return {
        ...state,
        page: state.page + 1,
      };

    case DECREMENT:
      return {
        ...state,
        page: state.page > 1 ? state.page - 1 : 1,
      };

    case RESET:
      return {
        ...state,
        page: 1,
      };

    case MORE_POSTS:
      return {
        ...state,
        morePosts: state.morePosts + 2,
      };

    case RESET_MORE_POSTS:
      return {
        ...state,
        morePosts: 2,
      };

    case CHANGE_PLACEHOLDER:
      return {
        ...state,
        changePlaceholder: !state.changePlaceholder,
      };

    default:
      return state;
  }
};

export default rootReducer;
