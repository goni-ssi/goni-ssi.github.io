import clsx from "clsx";
import { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";
import { anchorCss } from "./index.css";

type Props = Omit<
  DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  "ref"
>;

export const Anchor = ({ className, ...props }: Props) => {
  return (
    <a
      className={clsx(anchorCss, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};
