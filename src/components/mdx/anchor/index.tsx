import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { anchorCss } from './index.css';

type Props = ComponentPropsWithoutRef<'a'>;

export const Anchor = ({ className, ...props }: Props) => {
  return (
    <a
      className={clsx(anchorCss, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};
