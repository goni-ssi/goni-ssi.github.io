import { Kbd as RadixKbd } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { kbdCss } from './index.css';

type Props = ComponentPropsWithoutRef<typeof RadixKbd>;

export const Kbd = ({ className, ...props }: Props) => {
  return <RadixKbd className={clsx(kbdCss, className)} {...props} />;
};
