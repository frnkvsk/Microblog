import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  // getPosts,
  // getPostById,
  // postPostVote,
  // postPostNew,
  // putPostUpdate,
  // deletePost,
  getComments,
  postCommentNew,
  // putCommentUpdate,
  deleteComment,
} from './api/MicroblogApi';


// export const getPostsData = createAsyncThunk(
//   'getPosts',
//   async () => {
//     const response = await getPosts();
//     return response.data;
//   }
// );
// export const getPostDataById = createAsyncThunk(
//   'getPostById',
//   async (id) => {
//     const response = await getPostById(id);
//     return response.data;
//   }
// );
export const getCommentsDataById = createAsyncThunk(
  'getCommentsById',
  async (id) => {
    const response = await getComments(id);
    return response.data;
  }
);
// export const removeCommentDataByID = createAsyncThunk(
//   'removeCommentById',
//   async (id) => await deleteComment(id)
// )

export const microblogCommentsSlice = createSlice({
  name: 'commentList',
  initialState: {
    commentList: {
      status: 'idle',
      data: [],
      error: {}
    }
  },
  reducers: {
    // addNewPost: (state, action) => {
    //   const {title, description, body} = action.payload;
    //   postPostNew(title, description, body);
    // },
    // editPost: (state, action) => {
    //   const {id, title, description, body} = action.payload;
    //   putPostUpdate(id, title, description, body);
    // },
    // removePost: (state, action) => {
    //   deletePost(action.payload.id);
    // },
    addNewComment: (state, action) => {
      const {id, comment} = action.payload;
      postCommentNew(id, comment);
    },
    removeComment: (state, action) => {
      deleteComment(action.payload.id);
    },
    
  },
  extraReducers: {
    
    // get comments by id
    [getCommentsDataById.pending]: (state, action) => {
      state.commentList = {
        status: 'pending',
        data: {},
        error: {}
      };
    },
    [getCommentsDataById.fulfilled]: (state, action) => {
      state.commentList = {
        status: 'fulfilled',
        data: action.payload,
        error: {}
      };
    },
    [getCommentsDataById.rejected]: (state, action) => {
      state.commentList = {
        status: 'rejected',
        data: {},
        error: action.payload,
      };
    },
    // remove comments by id
    // [removeCommentDataByID.pending]: (state, action) => {
    //   state.commentList = {
    //     status: 'pending',
    //     data: getCommentsDataById,
    //     error: {}
    //   };
    // },
    // [removeCommentDataByID.fulfilled]: (state, action) => {
    //   state.commentList = {
    //     status: 'fulfilled',
    //     data: getCommentsDataById,
    //     error: {}
    //   };
    // },
    // [removeCommentDataByID.rejected]: (state, action) => {
    //   state.commentList = {
    //     status: 'rejected',
    //     data: getCommentsDataById,
    //     error: action.payload,
    //   };
    // },
    
  }
});

export const {
  // addNewPost,
  // editPost,
  // removePost,
  addNewComment,
  removeComment,
} = microblogCommentsSlice.actions;

export const selectComments = state => state.commentList.commentList;

export default microblogCommentsSlice.reducer;