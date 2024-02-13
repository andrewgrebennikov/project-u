import { cx } from 'classix';
import { SyntheticEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import styles from './AddCommentForm.module.scss';

interface ICommentFormProps {
  className?: string;
  onSubmitCommentForm: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: ICommentFormProps) => {
  const { className, onSubmitCommentForm } = props;
  const dispatch = useAppDispatch();
  const commentText = useSelector(getCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const handleCommentFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmitCommentForm(commentText);
    onCommentTextChange('');
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={cx(styles.addCommentForm, className)} onSubmit={handleCommentFormSubmit}>
        <Input
          className={styles.inputText}
          placeholder="Введите текст комментария"
          onChange={onCommentTextChange}
          value={commentText}
        />
        <Button className={styles.submitButton} variant={ButtonVariant.OUTLINED}>
          Отправить
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
