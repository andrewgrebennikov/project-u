import cx from 'classix';
import styles from './CommentItem.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ICommentItemProps {
  className?: string;
  comment: Comment;
}

export const CommentItem = (props: ICommentItemProps) => {
  const { className, comment } = props;
  const { user, text } = comment;

  return (
    <div className={cx(className, styles.commentItem)}>
      <div className={styles.user}>
        {user.avatar ? (
          <Avatar className={styles.avatar} src={user.avatar} alt={user.username} width={32} height={32} />
        ) : null}
        <span className={styles.username}>{user.username}</span>
      </div>
      <div className={styles.commentText}>
        <p>{text}</p>
      </div>
    </div>
  );
};
