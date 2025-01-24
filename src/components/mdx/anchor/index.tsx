import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { anchorCss, autoLinkHeaderCss } from './index.css';
import { AUTO_LINK_HEADER_CLASS_NAME } from '../../../constants/plugins';
import { Link } from 'gatsby';

type Props = ComponentPropsWithoutRef<'a'>;

export const Anchor = ({ className, ...props }: Props) => {
  if (className?.includes(AUTO_LINK_HEADER_CLASS_NAME)) {
    const { href, ...restProps } = props;
    return (
      <Link className={clsx(autoLinkHeaderCss, className)} to={props.href ?? ''} {...restProps} />
    );
  }

  return (
    <a
      className={clsx(anchorCss, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};
