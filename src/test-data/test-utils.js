// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../features/microblog/context/AuthContext';
import store from '../app/store';
import { Provider } from 'react-redux';

const AllTheProviders = (page) => {
  return render(
    <Provider store={store}>
    <AuthProvider>
      {page}
    </AuthProvider>    
  </Provider>    
  );  
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { AllTheProviders as render }
