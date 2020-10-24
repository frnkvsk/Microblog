import React, { useContext, useEffect } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { AuthContext, AuthProvider } from '../../features/microblog/context/AuthContext';

const TestComponent = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    auth.setAuthState({
      token: 'testtoken',
      userInfo: {
      username: 'testuser',
      first_name: 'testfirst',
      last_name: 'testlast',
      email: 'test@test.com',
      photo_url: null
    }});
  }, []);  

  return (
    <div>
      <div>{auth.authState.userInfo.username}</div>
      <div>{auth.authState.userInfo.first_name}</div>
      <div>{auth.authState.userInfo.last_name}</div>
      <div>{auth.authState.userInfo.email}</div>
      <div>{auth.authState.userInfo.photo_url}</div>
    </div>
  )
}


describe('AuthContext tests', () => {  
  it('AuthContext sets state', () => {
    render(<AuthProvider><TestComponent /></AuthProvider>);
    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByText('testfirst')).toBeInTheDocument();
    expect(screen.getByText('testlast')).toBeInTheDocument();
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
  })
  
});

