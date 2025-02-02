
import { Blockquote as RadixBlockQuote } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

import { blockQuoteCss } from './index.css';

type Props = Omit<ComponentPropsWithoutRef<'blockquote'>, 'color'>;

export const BlockQuote = ({ className, ...props }: Props) => {
  return <RadixBlockQuote className={clsx(blockQuoteCss, className)} {...props} />;
};
