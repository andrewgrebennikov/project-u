import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import styles from './Page.module.scss';
import cx from 'classix';
import { useInfinityScroll } from 'shared/hooks/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { scrollActions } from 'features/SavePositionScroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollPositionByPathname } from 'features/SavePositionScroll/model/selectors/getScrollPosition/getScrollPosition';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';
import { useThrottle } from 'shared/hooks/useThrottle';

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: IPageProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollPosition = useSelector((state: StoreSchema) => getScrollPositionByPathname(state, pathname));

  const handlePageScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollActions.setScrollPosition({ pathname, position: event.currentTarget.scrollTop }));
  }, 500);

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  return (
    <div ref={wrapperRef} className={cx(styles.page, className)} onScroll={handlePageScroll}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
