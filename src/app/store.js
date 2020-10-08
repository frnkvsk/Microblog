import { configureStore } from '@reduxjs/toolkit';
import microblogPostsSlice from '../features/microblog/microblogPostsSlice';
import microblogCommentsSlice from '../features/microblog/microblogCommentsSlice';
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    postList: microblogPostsSlice,
    commentList: microblogCommentsSlice,
  },
});
