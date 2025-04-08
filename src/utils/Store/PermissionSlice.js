import { createSlice } from '@reduxjs/toolkit';

const permissionSlice = createSlice({
  name: 'permission',
  initialState: {
    permissionList: []
  },
  reducers: {
    getPermissionList: (state, action) => {
      state.permissionList = action.payload;
    },

    updatePermissionList: (state, action) => {
      state.permissionList = state.permissionList.map((permission) =>
        permission._id === action.payload._id
          ? { ...permission, ...action.payload }
          : permission
      );
    }
  }
});

export const { getPermissionList, updatePermissionList } =
  permissionSlice.actions;
export default permissionSlice.reducer;
