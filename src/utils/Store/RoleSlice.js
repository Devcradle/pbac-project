import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
  name: 'role',
  initialState: {
    roleList: []
  },
  reducers: {
    getRolelist: (state, action) => {
      state.roleList = action.payload;
    },

    updateRolelist: (state, action) => {
      state.roleList = state.roleList.map((role) =>
        role._id === action.payload._id ? { ...role, ...action.payload } : role
      );
    }
  }
});

export const { getRolelist, updateRolelist } = roleSlice.actions;
export default roleSlice.reducer;
