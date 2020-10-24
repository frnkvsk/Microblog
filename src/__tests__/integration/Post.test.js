import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Post from '../../features/microblog/pages/Post';

// smoke and appearance tests
test('renders Jobs ', async() => {
  render(<Post />);
  
  expect(screen.getByPlaceholderText(/new comment/i)).toBeInTheDocument();

  expect(screen.getByText(/comments/i)).toBeInTheDocument();

  expect(screen.getByText(/add/i)).toBeInTheDocument();
});
