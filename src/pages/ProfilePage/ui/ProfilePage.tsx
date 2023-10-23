import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadonly);

  const onEditForm = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEditForm = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveForm = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  useEffect(() => {
    document.title = t('Страница О нас');
  }, [t]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfilePageHeader
        readOnly={readOnly}
        onEditForm={onEditForm}
        onCancelEditForm={onCancelEditForm}
        onSaveForm={onSaveForm}
      />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readOnly={readOnly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
