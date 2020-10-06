import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getPosts,
  // getPostById,
  // postPostVote,
  postPostNew,
  // putPostUpdate,
  // deletePost,
  // getComments,
  // postCommentNew,
  // putCommentUpdate,
  // deleteComment,
} from './api/MicroblogApi';

// export const fetchPlayerList = createAsyncThunk(
  // 'team/playerListLoading', 
//   (teamId:string) =>
//   axios
//     .get(`https://api.opendota.com/api/teams/${teamId}/players`)
//     .then(response => response.data)
//     .catch(error => error),
// );

export const getPostsData = createAsyncThunk(
  'getPosts',
  async () => {
    const response = await getPosts();
    return response.data;
  }
);
// export const addNewPost = createAsyncThunk(
//   'getPosts',
//   async (title, description, body) => {
//     const response = await postPostNew(title, description, body);
//     return response.data;
//   }
// );

export const microblogPostsSlice = createSlice({
  name: 'postList',
  initialState: {
    postList: {
      status: 'idle',
      data: [],
      error: {}
    }
  },
  reducers: {
    addNewPost: (state, action) => {
      postPostNew(action.payload.title, action.payload.description, action.payload.body);
    }
  },
  extraReducers: {
    // get all posts
    [getPostsData.pending]: (state, action) => {
      state.postList = {
        status: 'pending',
        data: {},
        error: {}
      };
    },
    [getPostsData.fulfilled]: (state, action) => {
      state.postList = {
        status: 'fulfilled',
        data: action.payload,
        error: {}
      };
    },
    [getPostsData.rejected]: (state, action) => {
      state.postList = {
        status: 'rejected',
        data: {},
        error: action.payload,
      };
    },
    // add a new post
    // [addNewPost.pending]: (state, action) => {
    //   state.postList = {
    //     ...data,
    //     status: 'pending',
    //     error: {}
    //   };
    // },
    // [addNewPost.fulfilled]: (state, action) => {
    //   state.postList = {
    //     ...data,
    //     status: 'fulfilled',
    //     error: {}
    //   };
    // },
    // [addNewPost.rejected]: (state, action) => {
    //   state.postList = {
    //     ...data,
    //     status: 'rejected',
    //     error: action.payload,
    //   };
    // },
  }
});

export const {
  addNewPost,
} = microblogPostsSlice.actions;

export const selectPosts = state => state.postList.postList;

export default microblogPostsSlice.reducer;