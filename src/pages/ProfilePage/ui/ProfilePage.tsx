import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Страница О нас');
  }, [t]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <h1>{t('Страница профиля')}</h1>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
