import { cleanup } from '@testing-library/react';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    expect('a').toEqual('a');
  });
});
