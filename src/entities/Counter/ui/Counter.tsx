import { useSelector } from 'react-redux';
import { counterActions } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const dec = () => {
    dispatch(counterActions.decrement());
  };

  const inc = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div>
      <h1 data-testid="title">{counterValue}</h1>
      <button data-testid="increment" onClick={inc}>
        {t('Увеличить')}
      </button>
      <button data-testid="decrement" onClick={dec}>
        {t('Уменьшить')}
      </button>
    </div>
  );
};
