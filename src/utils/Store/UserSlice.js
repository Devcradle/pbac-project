import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: []
  },
  reducers: {
    getUserlist: (state, action) => {
      state.userList = action.payload;
    },

    updateUserlist: (state, action) => {
      state.userList = state.userList.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    }
  }
});

export const { getUserlist, updateUserlist } = userSlice.actions;
export default userSlice.reducer;
