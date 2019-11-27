import rootReducer, { initialState } from '../../reducers';

describe('test reducer', () => {
  it('should return the initial state', () => {
    const reducer = rootReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});
