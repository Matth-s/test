import { createAsyncThunk } from '@reduxjs/toolkit';
import { FeedbackSchema } from '../schemas/schema';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseSetup';
import {
  setFeedbacks,
  setNewFeedback,
} from '../store/features/feedbacks-slice';

export const createFeedbackService = createAsyncThunk(
  'create feedback',
  async (
    { feedback }: { feedback: FeedbackSchema },
    { dispatch }
  ) => {
    try {
      const feedbackRef = doc(db, 'feedbacks', feedback.id);

      await setDoc(feedbackRef, { ...feedback });

      dispatch(setNewFeedback(feedback));

      return { status: 201 };
    } catch (error) {
      throw new Error('error');
    }
  }
);

export const getFeedbacksService = createAsyncThunk(
  'get all feedbacks',
  async (_, { dispatch }) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'feedbacks')
      );

      const data: FeedbackSchema[] = [];

      querySnapshot.forEach((doc) => {
        data.push(doc.data() as FeedbackSchema);
      });

      console.log(data);
      dispatch(setFeedbacks(data));
    } catch (error) {
      throw new Error('');
    }
  }
);
