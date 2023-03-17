import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const IconButton: FC<IIconButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button className={className} {...otherProps}>
      {children}
    </Button>
  );
};
