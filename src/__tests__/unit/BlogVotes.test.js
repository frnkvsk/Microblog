import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import BlogVotes from '../../features/microblog/components/BlogVotes';

// smoke and appearance tests
test('renders Profile ', async() => {
  render(<BlogVotes/>);
  
  expect(screen.getByText(/votes/i)).toBeInTheDocument();
});
