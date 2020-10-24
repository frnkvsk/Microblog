import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import BlogForm from '../../features/microblog/components/BlogForm';

// smoke and appearance tests
test('renders Profile ', async() => {
  render(<BlogForm  data={{}}/>);
  
  expect(screen.getByText(/title:/i)).toBeInTheDocument();
  expect(screen.getByText(/description:/i)).toBeInTheDocument();
  expect(screen.getByText(/body:/i)).toBeInTheDocument();

  expect(screen.getByRole('button', {name: /save/i})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
});
