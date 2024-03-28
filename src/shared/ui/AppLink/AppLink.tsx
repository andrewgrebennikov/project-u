import { cx } from 'classix';
import { forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ValueOf } from '../../lib/types/valueOf';

import styles from './AppLink.module.scss';

export const AppLinkUnderline = {
  ALWAYS: 'always',
  HOVER: 'hover',
  NONE: 'none',
} as const;

export type AppLinkUnderline = ValueOf<typeof AppLinkUnderline>;

export const AppLinkVariant = {
  TEXT: 'text',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
} as const;

export type AppLinkVariant = ValueOf<typeof AppLinkVariant>;

interface IAppLink extends LinkProps {
  className?: string;
  underline?: AppLinkUnderline;
  variant?: AppLinkVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const AppLink = forwardRef<HTMLAnchorElement, IAppLink>((props, ref) => {
  const {
    className,
    children,
    underline = AppLinkUnderline.ALWAYS,
    variant,
    startIcon,
    endIcon,
    ...otherProps
  } = props;

  if (variant) {
    return (
      <Link
        className={cx(
          styles.appLinkButton,
          className,
          {
            [AppLinkVariant.TEXT]: styles.text,
            [AppLinkVariant.CONTAINED]: styles.contained,
            [AppLinkVariant.OUTLINED]: styles.outlined,
          }[variant],
        )}
        ref={ref}
        {...otherProps}
      >
        {startIcon}
        {children}
        {endIcon}
      </Link>
    );
  }

  return (
    <Link
      className={cx(
        styles.appLink,
        className,
        {
          [AppLinkUnderline.NONE]: styles.underlineNone,
          [AppLinkUnderline.HOVER]: styles.underlineHover,
          [AppLinkUnderline.ALWAYS]: styles.underlineAlways,
        }[underline],
      )}
      ref={ref}
      {...otherProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </Link>
  );
});
