import { cx } from 'classix';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ValueOf } from 'shared/lib/types/valueOf';

import styles from './AppLink.module.scss';

export const AppLinkUnderline = {
  ALWAYS: 'always',
  HOVER: 'hover',
  NONE: 'none',
} as const;

export type AppLinkUnderline = ValueOf<typeof AppLinkUnderline>;

interface IAppLink extends LinkProps {
  className?: string;
  underline?: AppLinkUnderline;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const AppLink: FC<IAppLink> = (props) => {
  const { className, children, to, underline = AppLinkUnderline.ALWAYS, startIcon, endIcon, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={cx(
        styles.appLink,
        className,
        {
          [AppLinkUnderline.NONE]: styles.underlineNone,
          [AppLinkUnderline.HOVER]: styles.underlineHover,
          [AppLinkUnderline.ALWAYS]: styles.underlineAlways,
        }[underline],
      )}
      {...otherProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </Link>
  );
};
