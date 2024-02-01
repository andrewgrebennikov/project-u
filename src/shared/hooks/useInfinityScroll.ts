import { MutableRefObject, useEffect } from 'react';

interface IUseInfinityScrollProps {
  wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export const useInfinityScroll = (props: IUseInfinityScrollProps) => {
  const { triggerRef, wrapperRef, callback } = props;

  useEffect(() => {
    const triggerElement = triggerRef.current;

    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      if (observer) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
