import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialState {
  user: {
    name: string;
    photo: string | null;
    uid: string;
  } | null;
  isLoading: boolean;
}

const initialState: initialState = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user slice',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        name: string;
        photo: string | null;
        uid: string;
      }>
    ) => {
      state.user = action.payload;
      state.isLoading = false;
    },

    setNoUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, setNoUser } = userSlice.actions;
export default userSlice.reducer;
