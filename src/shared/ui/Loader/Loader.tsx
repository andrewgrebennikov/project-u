import cx from 'classix';
import styles from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = (props: ILoaderProps) => {
  const { className } = props;

  return <div className={cx(styles.loader, className)}></div>;
};
