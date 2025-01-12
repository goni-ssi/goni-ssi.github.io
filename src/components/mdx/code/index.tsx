import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { Code as RadixCode } from '@radix-ui/themes';

type Props = Omit<ComponentPropsWithoutRef<'code'>, 'color'>;

export const InlineCode = ({ className, ...props }: Props) => {
  return <RadixCode className={clsx(className)} {...props} />;
};
