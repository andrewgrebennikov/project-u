import { cx } from 'classix';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticlesOrder, ArticlesOrderField, getArticlesOrder } from 'features/ArticlesOrder';
import { ArticlesSearch, getArticlesSearch } from 'features/ArticlesSearch';
import { ArticlesSort, ArticlesSortField, getArticlesSort } from 'features/ArticlesSort';
import { ArticlesView, ArticlesViewSelector, getArticlesView } from 'features/ArticlesViewSelector';
import { fetchArticlesData } from 'pages/ArticlesPage/model/services/fetchArticlesData/fetchArticlesData';
import { articlesActions } from 'pages/ArticlesPage/model/slice/articlesSlice';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import styles from './Filters.module.scss';

interface IFiltersProps {
  className?: string;
}

export const Filters = (props: IFiltersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesData({ replace: true }));
  }, [dispatch]);

  const handleViewChange = (view: ArticlesView) => {
    dispatch(articlesActions.setView(view));
  };

  const handleSortChange = useCallback(
    (newSort: ArticlesSortField) => {
      const isSortCreated = newSort === ArticlesSortField.CREATED;

      dispatch(articlesActions.setSort(newSort));
      dispatch(articlesActions.setPage(1));
      fetchData();

      !isSortCreated ? searchParams.set('sort', newSort) : searchParams.delete('sort');
      setSearchParams(searchParams);
    },
    [dispatch, fetchData, searchParams, setSearchParams],
  );

  const handleOrderChange = useCallback(
    (newOrder: ArticlesOrderField) => {
      const isOrderAsc = newOrder === ArticlesOrderField.ASC;

      dispatch(articlesActions.setOrder(newOrder));
      dispatch(articlesActions.setPage(1));
      fetchData();

      !isOrderAsc ? searchParams.set('order', newOrder) : searchParams.delete('order');
      setSearchParams(searchParams);
    },
    [dispatch, fetchData, searchParams, setSearchParams],
  );

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      dispatch(articlesActions.setSearch(newSearch));
      dispatch(articlesActions.setPage(1));
      fetchData();

      newSearch ? searchParams.set('search', newSearch) : searchParams.delete('search');
      setSearchParams(searchParams);
    },
    [dispatch, fetchData, searchParams, setSearchParams],
  );

  return (
    <div className={cx(styles.filters, className)}>
      <ArticlesSort onSortChange={handleSortChange} sort={sort} />
      <ArticlesOrder onOrderChange={handleOrderChange} order={order} />
      <ArticlesViewSelector className={styles.articlesView} view={view} onViewChange={handleViewChange} />
      <ArticlesSearch className={styles.articlesSearch} search={search} onSearchChange={handleSearchChange} />
    </div>
  );
};
