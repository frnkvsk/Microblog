import { configureStore } from '@reduxjs/toolkit';
import microblogPostsSlice from '../features/microblog/microblogPostsSlice';
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    postList: microblogPostsSlice,
  },
});
