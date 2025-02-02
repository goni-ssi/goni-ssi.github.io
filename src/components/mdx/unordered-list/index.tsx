import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';


import { unorderedListCss } from './index.css';

type Props = ComponentPropsWithoutRef<'ul'>;

export const UnorderedList = ({ className, ...props }: Props) => {
  return <ul className={clsx(unorderedListCss, className)} {...props} />;
};
