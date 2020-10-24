import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../test-data/test-utils';
import Login from '../../features/microblog/pages/Login';

// smoke and appearance tests
test('renders Login ', async() => {
  render(<Login />);
  
  expect(screen.getByText(/username/i)).toBeInTheDocument();

  expect(screen.getByText(/password/i)).toBeInTheDocument();

  // click the 'SIGN UP' tab to load the sign up form
  fireEvent.click(screen.getByRole('tab', {name: /sign up/i}));

  // test if sign up form loaded
  expect(screen.queryByText(/first name/i)).toBeInTheDocument();

  // click the 'LOGIN' tab to load the login form
  fireEvent.click(screen.getByRole('tab', {name: /login/i}));

  // test if login form loaded
  expect(screen.queryByText(/first name/i)).not.toBeInTheDocument();

  expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
});

