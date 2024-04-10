import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { getIsEditArticleDetails } from '../../model/selectors/getIsEditArticleDetails/getIsEditArticleDetails';

import styles from './ArticleDetailsHeader.module.scss';

interface IArticleDetailsHeaderProps {
  articleId: string | undefined;
  className?: string;
}

export const ArticleDetailsHeader = (props: IArticleDetailsHeaderProps) => {
  const { articleId } = props;
  const { t } = useTranslation('translation');
  const isEdit = useSelector(getIsEditArticleDetails);

  return (
    <header className={styles.header}>
      <Link to={RoutePath.articles()}>{t('Назад')}</Link>
      {isEdit && <Link to={RoutePath.article_edit(articleId)}>{t('Редактировать')}</Link>}
    </header>
  );
};
