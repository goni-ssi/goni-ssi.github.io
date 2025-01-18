import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { hrCss } from './index.css';

type Props = ComponentPropsWithoutRef<'hr'>;

export const Hr = ({ className, ...props }: Props) => {
  return <hr className={clsx(hrCss, className)} {...props} />;
};
