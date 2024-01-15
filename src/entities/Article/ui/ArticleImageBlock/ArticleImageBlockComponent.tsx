import cx from 'classix';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface IArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: IArticleImageBlockProps) => {
  const { block, className } = props;
  const { src, title } = block;

  return (
    <div className={cx(className, styles.block)}>
      <figure>
        <img src={src} alt={title} />
        {title && <figcaption>{title}</figcaption>}
      </figure>
    </div>
  );
};
