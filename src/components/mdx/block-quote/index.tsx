import clsx from "clsx";
import { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";
import { blockQuoteCss, innerCss } from "./index.css";

type Props = Omit<
  DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >,
  "ref"
>;

export const BlockQuote = ({ className, children, ...props }: Props) => {
  return (
    <blockquote className={clsx(blockQuoteCss, className)} {...props}>
      <div className={innerCss}>{children}</div>
    </blockquote>
  );
};
