import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getPosts,
  getPostById,
  postPostVote,
  postPostNew,
  putPostUpdate,
  deletePost,
  // getComments,
  // postCommentNew,
  // putCommentUpdate,
  // deleteComment,
} from './api/MicroblogApi';


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
// export const getCommentsDataById = createAsyncThunk(
//   'getCommentsById',
//   async (id) => {
//     const response = await getComments(id);
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
      const {title, description, body} = action.payload;
      postPostNew(title, description, body);
    },
    editPost: (state, action) => {
      const {id, title, description, body} = action.payload;
      putPostUpdate(id, title, description, body);
    },
    removePost: (state, action) => {
      deletePost(action.payload.id);
    },
    vote: (state, action) => {
      const {id, direction} = action.payload;
      console.log('microblogPostsSlice',id,direction)
      postPostVote(id, direction);
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
      console.log('microblogPostsSlice',action.payload)
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
    // get comments by id
    // [getCommentsDataById.pending]: (state, action) => {
    //   state.postList = {
    //     status: 'pending',
    //     data: {},
    //     error: {}
    //   };
    // },
    // [getCommentsDataById.fulfilled]: (state, action) => {
    //   state.postList = {
    //     status: 'fulfilled',
    //     data: action.payload,
    //     error: {}
    //   };
    // },
    // [getCommentsDataById.rejected]: (state, action) => {
    //   state.postList = {
    //     status: 'rejected',
    //     data: {},
    //     error: action.payload,
    //   };
    // },
    
  }
});

export const {
  addNewPost,
  editPost,
  removePost,
  vote,
  // addNewComment,
  // removeComment,
} = microblogPostsSlice.actions;

export const selectPosts = state => state.postList.postList;

export default microblogPostsSlice.reducer;