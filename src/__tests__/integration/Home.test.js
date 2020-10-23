import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Home from '../../features/microblog/pages/Home';

// smoke and appearance tests
test('renders Home ', async() => {
  // expect(true).toBe(true)
  render(<Home />);
  
  expect(screen.getAllByText(/microblog/i)[0]).toBeInTheDocument();

  expect(screen.getAllByText(/our innovative site for communicating on the information superhighway./i)[0]).toBeInTheDocument();

});