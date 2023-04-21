import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Register } from '../../utils/customer';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')),
    settings: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem('user');
      state.current = {};
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
