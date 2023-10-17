import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cx from 'classix';
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
        underline === AppLinkUnderline.NONE && styles.underlineNone,
        underline === AppLinkUnderline.HOVER && styles.underlineHover,
      )}
      {...otherProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </Link>
  );
};
