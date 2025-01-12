import { Heading } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { h1Css, h2Css, h3Css, h4Css, h5Css, h6Css } from './index.css';

type Props = Omit<ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>, 'color'>;

export const Header1 = ({ className, ...props }: Props) => {
  return <Heading as="h1" size="7" className={clsx(h1Css, className)} {...props} />;
};

export const Header2 = ({ className, ...props }: Props) => {
  return <Heading as="h2" size="6" className={clsx(h2Css, className)} {...props} />;
};

export const Header3 = ({ className, ...props }: Props) => {
  return <Heading as="h3" size="5" className={clsx(h3Css, className)} {...props} />;
};

export const Header4 = ({ className, ...props }: Props) => {
  return <Heading as="h4" size="4" className={clsx(h4Css, className)} {...props} />;
};

export const Header5 = ({ className, ...props }: Props) => {
  return <Heading as="h5" size="3" className={clsx(h5Css, className)} {...props} />;
};

export const Header6 = ({ className, ...props }: Props) => {
  return <Heading as="h6" size="2" className={clsx(h6Css, className)} {...props} />;
};
