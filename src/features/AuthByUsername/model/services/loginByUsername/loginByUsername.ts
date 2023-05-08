import axios from 'axios';
import i18n from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, ILoginByUsername>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
  },
);
