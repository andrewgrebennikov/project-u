import cx from 'classix';
import styles from './ArticlesSort.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { ArticlesSortField } from 'entities/Article';

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
  const { className, sort } = props;

  return (
    <div className={cx(styles.sort, className)}>
      <Select label="Сортировать" options={options} value={sort} onChange={() => {}} />
    </div>
  );
};
