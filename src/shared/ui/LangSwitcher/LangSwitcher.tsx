import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
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
    <Button className={className} onClick={handleLangClick}>
      {t('РУ')}
    </Button>
  );
};
