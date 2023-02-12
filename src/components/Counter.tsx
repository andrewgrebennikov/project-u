import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <h1 className={classes.title}>Click: {count}</h1>
      <button className={classes.button} onClick={handleClick}>
        Click
      </button>
    </>
  );
};
