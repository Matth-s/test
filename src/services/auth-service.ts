import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../utils/firebaseSetup';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { setNoUser, setUser } from '../store/features/user-slice';

interface user {
  email: string;
  password: string;
  username: string;
  image: string;
}

export const createUserService = createAsyncThunk(
  'create user',
  async ({ user }: { user: user }, { dispatch }) => {
    const { email, password } = user;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(
        setUser({
          name: user.displayName ? user.displayName : '',
          photo: user.photoURL,
          uid: user.uid,
        })
      );

      return { status: 201 };
    } catch (error) {
      console.log(error);
    }
  }
);

export const logInService = createAsyncThunk(
  'login',
  async (
    {
      credentials,
    }: { credentials: { email: string; password: string } },
    { dispatch }
  ) => {
    try {
      const { email, password } = credentials;

      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (user) {
        dispatch(
          setUser({
            name: user.displayName ? user.displayName : '',
            photo: user.photoURL,
            uid: user.uid,
          })
        );
      }

      return { status: 201 };
    } catch (error) {
      throw new Error('');
    }
  }
);

export const checkUserStatusService = createAsyncThunk(
  'check user state',
  async (_, { dispatch }) => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              name: user.displayName ? user.displayName : '',
              photo: user.photoURL,
              uid: user.uid,
            })
          );
        } else {
          dispatch(setNoUser());
        }
      });
    } catch (error) {
      throw new Error('');
    }
  }
);

export const logOutService = createAsyncThunk(
  'log out',
  async (_, { dispatch }) => {
    try {
      await signOut(auth);
      dispatch(setNoUser());

      return { status: 201 };
    } catch (error) {
      throw new Error('');
    }
  }
);
