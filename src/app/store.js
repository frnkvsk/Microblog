import { configureStore } from '@reduxjs/toolkit';
import microblogPostsSlice from '../features/microblog/microblogPostsSlice';
import microblogCommentsSlice from '../features/microblog/microblogCommentsSlice';
import microblogVotesSlice from '../features/microblog/microblogVotesSlice';
import microblogPageCountSlice from '../features/microblog/microblogPageCountSlice';

export default configureStore({
  reducer: {
    postList: microblogPostsSlice,
    commentList: microblogCommentsSlice,
    votesList: microblogVotesSlice,
    pageCount: microblogPageCountSlice,
  },
});
