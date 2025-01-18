import clsx from 'clsx';
import { Children, ComponentProps } from 'react';
import { Paragraph } from '../paragraph';
import { listCss } from './index.css';
import { isObject } from 'es-toolkit/compat';

type Props = ComponentProps<'li'>;

export const List = ({ className, ...props }: Props) => {
  return Children.map(props.children, (child) => {
    if (typeof child === 'string') {
      if (child === '\n') {
        return null;
      }

      return (
        <li className={clsx(listCss, className)}>
          <Paragraph>{child}</Paragraph>
        </li>
      );
    }

    if (
      isObject(child) &&
      'type' in child &&
      isObject(child.type) &&
      child.type.name === 'Paragraph'
    ) {
      return <li className={clsx(listCss, className)}>{child}</li>;
    }

    return child;
  });
};
