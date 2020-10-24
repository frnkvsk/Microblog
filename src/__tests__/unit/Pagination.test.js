import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../test-data/test-utils';
import PaginationComp from '../../features/microblog/components/Pagination';

// smoke and appearance tests
test('renders NavBar ', async() => {
  render(<PaginationComp pageCount={33}/>)
  
  expect(screen.getByText(/Page: 1/i)).toBeInTheDocument(); 
  expect(screen.getByRole('button', {name: /1/i})).toBeInTheDocument(); 
  expect(screen.getByRole('button', {name: /2/i})).toBeInTheDocument(); 
  expect(screen.getByRole('button', {name: /3/i})).toBeInTheDocument(); 

  // Change page
  fireEvent.click(screen.getByRole('button', {name: /2/i}));
  expect(screen.getByText(/Page: 2/i)).toBeInTheDocument(); 
  // Change page
  fireEvent.click(screen.getByRole('button', {name: /3/i}));
  expect(screen.getByText(/Page: 3/i)).toBeInTheDocument(); 
  // Change page
  fireEvent.click(screen.getByRole('button', {name: /1/i}));
  expect(screen.getByText(/Page: 1/i)).toBeInTheDocument(); 
  
});
