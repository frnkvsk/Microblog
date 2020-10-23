import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../test-data/test-utils';
import App from '../../App';

// smoke and appearance tests
test('renders Home ', () => {
  render(<App />);
  
  expect(screen.getAllByText(/microblog/i)[0]).toBeInTheDocument();

  expect(screen.getAllByText(/Login \/ Signup/i)[0]).toBeInTheDocument();

  expect(screen.getAllByRole('button', {name: /blog/i})[0]).toBeInTheDocument();
});

describe('test App and Login', () => {
  
  beforeAll(async () => {
    render(<App />);
  });
  

  test('can render login page from home page', () => {
    // click 'login / signup' button
    fireEvent.click(screen.getAllByRole('button', {name: /login \/ signup/i})[0]);

    // login screen
    expect(screen.getByText(/username/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    // username input textbox present
    fireEvent.click(screen.getByRole('textbox', {id: 'username'}), 'testusername1');
    // password input textox present
    fireEvent.click(screen.getByRole('textbox', {id: 'password'}), 'testpassword1');
    // submit button present
    fireEvent.click(screen.getByRole('button', {name: /submit/i}));
    // error message present
    expect(screen.getByText(/Error: Invalid credentials/i)).toBeInTheDocument();
  });
})



// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment()).toMatchSnapshot();
// });