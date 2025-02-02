import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';


import { orderedListCss } from './index.css';

type Props = ComponentPropsWithoutRef<'ol'>;

export const OrderedList = ({ className, ...props }: Props) => {
  return <ol className={clsx(orderedListCss, className)} {...props} />;
};
