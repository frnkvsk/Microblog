import { createSlice } from '@reduxjs/toolkit';

export const microblogPageCountSlice = createSlice({
  name: 'pageCount',
  initialState: {
    pageCount: {
      pagesTotal: 0,
      pageCurr: 0,
    }    
  },
  reducers: {
    setPages: (state, action) => {
      state.pageCount = {
        pagesTotal: action.payload.pagesTotal,
        pageCurr: action.payload.pageCurr,
      }
    },    
  },
  
});

export const {
  setPages,
} = microblogPageCountSlice.actions;

export const selectPageCount = state => state.pageCount.pageCount;

export default microblogPageCountSlice.reducer;