import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../test-data/test-utils';
import Navbar from '../../features/microblog/components/Navbar';

// smoke and appearance tests
test('renders NavBar ', async() => {
  render(<Navbar />)
  
  expect(screen.getByText(/login \/ signup/i)).toBeInTheDocument(); 

  // fireEvent does't cause error
  fireEvent.click(screen.getByRole('button', {name: /Login \/ Signup/i}));

  expect(screen.getByRole('link', {name: /Microblog Get in the Rithm of blogging!/i})).toBeInTheDocument();

  // fireEvent does't cause error
  fireEvent.click(screen.getByRole('link', {name: /Microblog Get in the Rithm of blogging!/i}));

  expect(screen.getByRole('button', {name: /blog/i})).toBeInTheDocument();

  // fireEvent does't cause error
  fireEvent.click(screen.getByRole('button', {name: /blog/i}));
  
});

