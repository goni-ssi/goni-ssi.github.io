
import { Strong as RadixStrong } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'strong'>;

export const Strong = ({ className, ...props }: Props) => {
  return <RadixStrong className={clsx(className)} {...props} />;
};
