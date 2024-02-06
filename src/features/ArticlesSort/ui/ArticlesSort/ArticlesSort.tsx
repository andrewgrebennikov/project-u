import cx from 'classix';
import styles from './ArticlesSort.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { ArticlesSortField } from '../../model/types/articles';

interface IArticlesSortProps {
  className?: string;
  sort: ArticlesSortField;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

const options = [
  {
    value: ArticlesSortField.CREATED,
    name: 'По дате публикации',
  },
  {
    value: ArticlesSortField.VIEWS,
    name: 'По популярности',
  },
  {
    value: ArticlesSortField.TITLE,
    name: 'По названию',
  },
];

export const ArticlesSort = (props: IArticlesSortProps) => {
  const { className, sort, onChangeSort } = props;

  const handleSortChange = (sort: string) => {
    onChangeSort(sort as ArticlesSortField);
  };

  return (
    <div className={cx(styles.sort, className)}>
      <Select label="Сортировать" options={options} value={sort} onChange={handleSortChange} />
    </div>
  );
};
