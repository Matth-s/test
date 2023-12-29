import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import feedbacksSlice from './features/feedbacks-slice';
import userSlice from './features/user-slice';

export const store = configureStore({
  reducer: {
    feedbacksSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
