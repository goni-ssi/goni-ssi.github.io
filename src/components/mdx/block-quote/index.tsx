import { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";
import { innerCss } from "./index.css";

type Props = Omit<
  DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >,
  "ref"
>;

export const BlockQuote = ({ className, children, ...props }: Props) => {
  return (
    <blockquote className={className} {...props}>
      <div className={innerCss}>{children}</div>
    </blockquote>
  );
};
