import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profileSchema';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const formData = getProfileFormData(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
