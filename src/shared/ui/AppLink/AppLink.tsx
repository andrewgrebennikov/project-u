import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cx from 'classix';
import styles from './AppLink.module.scss';

export const AppLinkUnderline = {
  ALWAYS: 'always',
  HOVER: 'hover',
  NONE: 'none',
} as const;

export type ValueOf<T> = T[keyof T];
export type AppLinkUnderline = ValueOf<typeof AppLinkUnderline>;

interface IAppLink extends LinkProps {
  className?: string;
  underline?: AppLinkUnderline;
}

export const AppLink: FC<PropsWithChildren<IAppLink>> = (props) => {
  const { className, children, to, underline = AppLinkUnderline.ALWAYS, ...otherProps } = props;

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
      {children}
    </Link>
  );
};
