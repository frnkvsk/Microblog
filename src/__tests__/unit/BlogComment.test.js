import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import BlogComments from '../../features/microblog/components/BlogComments';

// smoke and appearance tests
test('renders Jobs ', async() => {
  render(<BlogComments />);
  
  expect(screen.getByPlaceholderText(/new comment/i)).toBeInTheDocument();

  expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
  
});
