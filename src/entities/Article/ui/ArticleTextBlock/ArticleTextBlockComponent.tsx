import cx from 'classix';
import styles from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface IArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: IArticleTextBlockProps) => {
  const { block, className } = props;
  const { title, paragraphs } = block;

  return (
    <div className={cx(className, styles.block)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {paragraphs?.map((paragraph, index) => {
        return (
          <p key={index} className={styles.text}>
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};
