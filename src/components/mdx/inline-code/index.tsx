
import { Code as RadixCode } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'code'>, 'color'>;

export const InlineCode = ({ className, ...props }: Props) => {
  return <RadixCode className={clsx(className)} {...props} />;
};
