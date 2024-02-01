import { MutableRefObject, ReactNode, useRef } from 'react';
import styles from './Page.module.scss';
import cx from 'classix';
import { useInfinityScroll } from 'shared/hooks/useInfinityScroll';

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: IPageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <div ref={wrapperRef} className={cx(styles.page, className)}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
