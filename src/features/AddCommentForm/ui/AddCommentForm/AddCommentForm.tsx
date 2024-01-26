import cx from 'classix';
import styles from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import { SyntheticEvent, useCallback } from 'react';

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
  const commentText = useSelector(getCommentFormText) || '';

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
