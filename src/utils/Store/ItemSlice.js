import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    itemList: []
  },
  reducers: {
    getItemlist: (state, action) => {
      state.itemList = action.payload;
    },

    updateItemList: (state, action) => {
      state.itemList = state.itemList.map((item) =>
        item._id === action.payload._id ? { ...item, ...action.payload } : item
      );
    },

    deleteItemList: (state, action) => {
      state.itemList = state.itemList.filter(
        (item) => item._id !== action.payload._id
      );
    }
  }
});

export const { getItemlist, updateItemList, deleteItemList } =
  itemSlice.actions;
export default itemSlice.reducer;
