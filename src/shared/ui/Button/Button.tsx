import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'classix';
import { ValueOf } from 'shared/types/valueOf';
import styles from './Button.module.scss';

export const ButtonVariant = {
  TEXT: 'text',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
} as const;

export type ButtonVariant = ValueOf<typeof ButtonVariant>;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, className, variant = ButtonVariant.TEXT, startIcon, endIcon, ...otherProps } = props;

  return (
    <button
      className={cx(
        styles.button,
        className,
        variant === ButtonVariant.CONTAINED && styles.contained,
        variant === ButtonVariant.OUTLINED && styles.outlined,
      )}
      {...otherProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
