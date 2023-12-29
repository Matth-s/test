import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FeedbackSchema } from '../../schemas/schema';

interface initialState {
  feedbacks: FeedbackSchema[];
  isLoading: boolean;
  error: boolean | null;
}

const initialState: initialState = {
  feedbacks: [],
  isLoading: true,
  error: null,
};

const feedbackSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    setFeedbacks: (
      state,
      action: PayloadAction<FeedbackSchema[] | []>
    ) => {
      state.feedbacks = action.payload;
      state.isLoading = false;
    },
    setNewFeedback: (
      state,
      action: PayloadAction<FeedbackSchema>
    ) => {
      state.feedbacks.push(action.payload);
    },
  },
});

export const { setFeedbacks, setNewFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
