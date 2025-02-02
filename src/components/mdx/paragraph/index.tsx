
import { Text } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

import { paragraphCss } from './index.css';

type Props = ComponentPropsWithoutRef<'p'>;

export const Paragraph = ({ className, children }: Props) => {
  return (
    <Text as="span" className={clsx(paragraphCss, className)} size="4">
      {children}
    </Text>
  );
};
