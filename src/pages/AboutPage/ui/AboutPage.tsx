import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <h1>{t('Страница О нас')}</h1>
      <Counter />
    </>
  );
};

export default AboutPage;
