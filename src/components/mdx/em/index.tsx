import { Em as RadixEm } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { emCss } from './index.css';

type Props = Omit<ComponentPropsWithoutRef<'em'>, 'color'>;

/**
 * `_강조_`
 */
export const Em = ({ className, ...props }: Props) => {
  return <RadixEm className={clsx(emCss, className)} {...props} />;
};
