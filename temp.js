// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const myAsyncInSlice = createAsyncThunk('bundles/myAsyncInSlice', () =>
//   getAxiosInstance()
//     .get('/')
//     .then(ok => ok.data)
//     .catch(err => err),
// );

// const usersSlice = createSlice({
//   name: 'bundles',
//   initialState: {
//     bundles: [],
//     selectedBundle: null,
//     page: {
//       page: 0,
//       totalElements: 0,
//       size: 20,
//       totalPages: 0,
//     },
//     myAsyncResponse: null,
//     myAsyncResponseError: null,
//   },
//   reducers: {
//     // add your non-async reducers here
//   },
//   extraReducers: {
//     // you can mutate state directly, since it is using immer behind the scenes
//     [myAsyncInSlice.fulfilled]: (state, action) => {
//       state.myAsyncResponse = action.payload;
//     },
//     [myAsyncInSlice.rejected]: (state, action) => {
//       state.myAsyncResponseError = action.payload;
//     },
//   },
// });

