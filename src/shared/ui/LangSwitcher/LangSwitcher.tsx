import { FC } from 'react';
import cx from 'classix';
import { Button } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation('common');

  const handleLangClick = async () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    await i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <Button className={cx(className, styles.toggle)} onClick={handleLangClick}>
      {t('РУ')}
    </Button>
  );
};
