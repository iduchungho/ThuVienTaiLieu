import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Register } from '../../utils/customer';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')),
    settings: {},
  },
  reducer: {},
});

const { reducer } = userSlice;
export default reducer;
