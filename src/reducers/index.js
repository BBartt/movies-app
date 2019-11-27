import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  FETCH_GENRES_SUCCESS,
  FETCH_MOVIE_INFO_SUCCESS,
  FETCH_NEW_PAGE_SUCCESS,
  FETCH_NOW_PLAYING_SUCCESS,
  FETCH_MOVIE_CATEGORY_SUCCESS,
  CHANGE_PLACEHOLDER,
  INCREMENT,
  DECREMENT,
  MORE_POSTS,
  RESET_MORE_POSTS,
  RESET
} from "actions";

export const initialState = {
  loading: false,
  error: null,
  movies: [],
  movieGenreNumber: [],
  movieGenreInfo: [],
  movieInfo: [],

  movies_now_playing: [],
  morePosts: 3,
  page: 1,
  changePlaceholder: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        movieGenreInfo: action.payload.genres
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        page: 1,
        loading: false,
        movies: action.payload.results,
        movieGenreNumber: action.movieGenre.id
      };
    case FETCH_NEW_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results
      };
    case FETCH_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        movies_now_playing: action.payload.results
      };
    case FETCH_MOVIE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.results
      };
    case FETCH_MOVIE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        movieInfo: action.payload
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case INCREMENT:
      return {
        ...state,
        page: state.page + 1
      };
    case DECREMENT:
      return {
        ...state,
        page: state.page - 1
      };
    case MORE_POSTS:
      return {
        ...state,
        morePosts: state.morePosts + 2
      };
    case RESET_MORE_POSTS:
      return {
        ...state,
        morePosts: 2
      };
    case RESET:
      return {
        ...state,
        page: 1
      };
    case CHANGE_PLACEHOLDER:
      return {
        ...state,
        changePlaceholder: !state.changePlaceholder
      };
    default:
      return state;
  }
};

export default rootReducer;
