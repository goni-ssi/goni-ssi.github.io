import { ComponentPropsWithoutRef } from "react";
import { innerCss } from "./index.css";

type Props = ComponentPropsWithoutRef<"blockquote">;

export const BlockQuote = ({ className, children, ...props }: Props) => {
  return (
    <blockquote className={className} {...props}>
      <div className={innerCss}>{children}</div>
    </blockquote>
  );
};
