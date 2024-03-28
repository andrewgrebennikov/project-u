import { cx } from 'classix';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { ValueOf } from '../../lib/types/valueOf';

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

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, className, variant = ButtonVariant.TEXT, startIcon, endIcon, ...otherProps } = props;

  return (
    <button
      className={cx(
        styles.button,
        className,
        {
          [ButtonVariant.CONTAINED]: styles.contained,
          [ButtonVariant.TEXT]: styles.text,
          [ButtonVariant.OUTLINED]: styles.outlined,
        }[variant],
      )}
      ref={ref}
      {...otherProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
});
