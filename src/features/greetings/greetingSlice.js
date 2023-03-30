import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/messages');
  const data = await response.json();
  return data;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    id: null,
    greeting: '',
    created_at: '',
    updated_at: '',
    error: '',
    isLoading: false,
    isSuccessful: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(fetchMessages.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));

    builder.addCase(fetchMessages.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      isSuccessful: true,
      greeting: action.payload,
    }));
  },
});
export default greetingSlice.reducer;
