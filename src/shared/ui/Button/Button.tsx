import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import cx from 'classix';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={cx(styles.button, className)} {...otherProps}>
      {children}
    </button>
  );
};
