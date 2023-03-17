import { FC } from 'react';
import cx from 'classix';
import styles from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { className } = props;

  return <div className={cx(styles.loader, className)}></div>;
};
