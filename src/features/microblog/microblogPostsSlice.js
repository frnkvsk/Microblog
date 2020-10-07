import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getPosts,
  getPostById,
  // postPostVote,
  postPostNew,
  putPostUpdate,
  deletePost,
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
export const getPostDataById = createAsyncThunk(
  'getPostById',
  async (id) => {
    const response = await getPostById(id);
    return response.data;
  }
);


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
      const {title, description, body} = action.payload;
      postPostNew(title, description, body);
    },
    editPost: (state, action) => {
      const {id, title, description, body} = action.payload;
      putPostUpdate(id, title, description, body);
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
    // get post by id
    [getPostDataById.pending]: (state, action) => {
      state.postList = {
        status: 'pending',
        data: {},
        error: {}
      };
    },
    [getPostDataById.fulfilled]: (state, action) => {
      state.postList = {
        status: 'fulfilled',
        data: action.payload,
        error: {}
      };
    },
    [getPostDataById.rejected]: (state, action) => {
      state.postList = {
        status: 'rejected',
        data: {},
        error: action.payload,
      };
    },
    
  }
});

export const {
  addNewPost,
  editPost,
} = microblogPostsSlice.actions;

export const selectPosts = state => state.postList.postList;

export default microblogPostsSlice.reducer;