import React from 'react';
import { shallow } from '../enzyme';
import App from '../App';

describe('Test <App /> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders 1 <App /> component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
