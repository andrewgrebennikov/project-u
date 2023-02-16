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
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={cx(styles.langSwitcher, className)} onClick={handleLangClick}>
      {t('РУ')}
    </Button>
  );
};
