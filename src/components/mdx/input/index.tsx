import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { inputCss } from './index.css';

type Props = ComponentPropsWithoutRef<'input'>;

/** TODO Check List Component */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Input = ({ disabled, className, ...props }: Props) => {
  return <input className={clsx(inputCss, className)} readOnly {...props} />;
};
