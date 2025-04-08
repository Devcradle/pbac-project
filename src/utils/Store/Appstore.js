import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../Store/UserSlice';
import RoleSlice from '../Store/RoleSlice';
import ItemSlice from '../Store/ItemSlice';
import PermissionSlice from './PermissionSlice';

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    role: RoleSlice,
    item: ItemSlice,
    permission: PermissionSlice
  }
});

export default appStore;
