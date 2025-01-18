import clsx from 'clsx';
import { Children, ComponentProps } from 'react';
import { Paragraph } from '../paragraph';
import { listCss, todoListCss } from './index.css';
import { TASK_LIST_ITEM_CLASS_NAME } from '../../../constants/mdx';

type Props = ComponentProps<'li'>;

export const List = ({ className, ...props }: Props) => {
  if (className?.includes(TASK_LIST_ITEM_CLASS_NAME)) {
    return <li className={clsx(todoListCss, className)}>{props.children}</li>;
  }

  return Children.map(props.children, (child) => {
    if (typeof child === 'string') {
      if (child === '\n' || child === ' ') {
        return null;
      }

      return (
        <li className={clsx(listCss, className)}>
          <Paragraph>{child}</Paragraph>
        </li>
      );
    }

    return child;
  });
};
