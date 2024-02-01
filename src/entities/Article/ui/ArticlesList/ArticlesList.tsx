import cx from 'classix';
import styles from './ArticlesList.module.scss';
import { Article, ArticlesView } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton';

interface IArticlesListProps {
  className?: string;
  articles: Article[];
  view?: ArticlesView;
  isLoading?: boolean;
  error?: string;
}

const getSkeletons = (view: ArticlesView) => {
  return new Array(view === ArticlesView.GRID ? 8 : 3).fill(0).map((_, index) => {
    return <ArticleListItemSkeleton key={index} view={view} />;
  });
};

export const ArticlesList = (props: IArticlesListProps) => {
  const { articles, view = ArticlesView.LIST, className, isLoading, error } = props;

  if (error) {
    return (
      <div className={cx(styles.listing, className, view === ArticlesView.GRID && styles.listingGrid)}>
        <p>Произошла ошибка</p>
      </div>
    );
  }

  return (
    <div className={cx(styles.listing, className, view === ArticlesView.GRID && styles.listingGrid)}>
      {articles.length > 0 &&
        articles.map((article) => {
          return <ArticlesListItem key={article.id} article={article} view={view} />;
        })}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
