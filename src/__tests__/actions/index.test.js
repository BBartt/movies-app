import * as actions from '../../actions';

describe('Test action creators', function() {

  it('fetchBegin()', () => {
    const expectedAction = { type: actions.FETCH_MOVIES_BEGIN };
    expect(actions.fetchBegin()).toEqual(expectedAction);
  });
  it('fetchMoviesSuccess(items, movieGenre)', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIES_SUCCESS,
      payload: 'fetchMoviesSuccess(items, movieGenre) payload test',
      movieGenre: 'fetchMoviesSuccess(items, movieGenre) movieGenre test'
    };
    expect(
      actions.fetchMoviesSuccess(expectedAction.payload, expectedAction.movieGenre)
    ).toEqual(expectedAction);
  });
  it('fetchNewPageSuccess(items)', () => {
    const expectedAction = {
      type: actions.FETCH_NEW_PAGE_SUCCESS,
      payload: 'fetchNewPageSuccess(items) payload test'
    };
    expect(actions.fetchNewPageSuccess(expectedAction.payload)).toEqual(expectedAction);
  });
  it('fetchMovieInfoSuccess(items)', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIE_INFO_SUCCESS,
      payload: 'fetchMovieInfoSuccess(items) payload test'
    };
    expect(actions.fetchMovieInfoSuccess(expectedAction.payload)).toEqual(expectedAction);
  });
  it('fetchMoviesFailure(error)', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIES_FAILURE,
      payload: 'fetchMoviesFailure(error) payload test'
    };
    expect(actions.fetchMoviesFailure(expectedAction.payload)).toEqual(expectedAction);
  });
  it('fetchGenresSuccess(items)', () => {
    const expectedAction = {
      type: actions.FETCH_GENRES_SUCCESS,
      payload: 'fetchGenresSuccess(items) payload test'
    };
    expect(actions.fetchGenresSuccess(expectedAction.payload)).toEqual(expectedAction);
  });
  it('fetchMovieNowPlayingSuccess(items)', () => {
    const expectedAction = {
      type: actions.FETCH_NOW_PLAYING_SUCCESS,
      payload: 'fetchMovieNowPlayingSuccess(items) payload test'
    };
    expect(actions.fetchMovieNowPlayingSuccess(expectedAction.payload)).toEqual(expectedAction);
  });
  it('fetchMovieCategorySuccess(items)', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIE_CATEGORY_SUCCESS,
      payload: 'fetchMovieCategorySuccess(items) payload test'
    };
    expect(actions.fetchMovieCategorySuccess(expectedAction.payload)).toEqual(expectedAction);
  });

});
