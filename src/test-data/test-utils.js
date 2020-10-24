// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { AuthProvider } from '../features/microblog/context/AuthContext';
import store from '../app/store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

const AllTheProviders = (page, route) => {
  const history = createMemoryHistory();
  history.push(route);
  return render(
    <Router history={history}>
      <Provider store={store}>
        <AuthProvider>
          {page}
        </AuthProvider>    
      </Provider>
    </Router>
        
  );  
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { AllTheProviders as render }
