import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "features/movies/moviesSlice";
import uiReducer from "features/ui/uiSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
