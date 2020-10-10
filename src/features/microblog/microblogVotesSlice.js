import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getPosts,
  // getPostById,
  postPostVote,
  // postPostNew,
  // putPostUpdate,
  // deletePost,
  // getComments,
  // postCommentNew,
  // putCommentUpdate,
  // deleteComment,
} from './api/MicroblogApi';


export const getPostsData = createAsyncThunk(
  'getVotes',
  async () => {
    const response = await getPosts();
    return response.data;
  }
);
// export const getPostDataById = createAsyncThunk(
//   'getPostById',
//   async (id) => {
//     const response = await getPostById(id);
//     return response.data;
//   }
// );
// export const getPostDataById = createAsyncThunk(
//   'getVotesById',
//   async (id) => {
//     const response = await getPostById(id);
//     return response.data;
//   }
// );


export const microblogVotesSlice = createSlice({
  name: 'votesList',
  initialState: {
    votesList: {
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
    vote: (state, action) => {
      const {id, direction} = action.payload;
      console.log('microblogVotesSlice',id,direction)
      postPostVote(id, direction);
    }
  },
  extraReducers: {
    // // get all posts
    [getPostsData.pending]: (state, action) => {
      state.votesList = {
        status: 'pending',
        data: {},
        error: {}
      };
    },
    [getPostsData.fulfilled]: (state, action) => {
      state.votesList = {
        status: 'fulfilled',
        data: action.payload,
        error: {}
      };
    },
    [getPostsData.rejected]: (state, action) => {
      state.votesList = {
        status: 'rejected',
        data: {},
        error: action.payload,
      };
    },
  //   // get post by id
    // [getPostDataById.pending]: (state, action) => {
    //   state.votesList = {
    //     status: 'pending',
    //     data: [],
    //     error: {}
    //   };
    // },
    // [getPostDataById.fulfilled]: (state, action) => {
    //   console.log('action.payload',action.payload)
    //   state.votesList = {
    //     status: 'fulfilled',
    //     data: [...data,{id: action.payload.id, votes: action.payload.votes}],
    //     // data: data ? data.map(e => {
    //     //   if(e.id === action.payload.id){
    //     //     return {
    //     //       ...e,
    //     //       votes: action.payload.votes,
    //     //     }
    //     //   } else {
    //     //     return e
    //     //   }  
    //     // }) : action.payload,
    //     error: {},
    //   };
    // },
    // [getPostDataById.rejected]: (state, action) => {
    //   state.votesList = {
    //     status: 'rejected',
    //     data: [],
    //     error: action.payload,
    //   };
    // },    
  }
});

export const {
  vote,
} = microblogVotesSlice.actions;

export const selectVotes = state => state.votesList.votesList;

export default microblogVotesSlice.reducer;