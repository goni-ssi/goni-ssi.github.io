import { Heading } from "@radix-ui/themes";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { mdxCss } from "../../../styles/mdx.utils";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  "color" | "ref"
>;

export const Header1 = ({ className, ...props }: Props) => {
  return (
    <Heading
      as="h1"
      size="7"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        className
      )}
      {...props}
    />
  );
};

export const Header2 = ({ className, ...props }: Props) => {
  return (
    <Heading
      as="h2"
      size="6"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        className
      )}
      {...props}
    />
  );
};

export const Header3 = ({ className, ...props }: Props) => {
  return (
    <Heading
      as="h3"
      size="5"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        className
      )}
      {...props}
    />
  );
};

export const Header4 = ({ className, ...props }: Props) => {
  return (
    <Heading
      as="h4"
      size="4"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        className
      )}
      {...props}
    />
  );
};

export const Header5 = ({ className, ...props }: Props) => {
  return (
    <Heading
      as="h5"
      size="3"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        className
      )}
      {...props}
    />
  );
};

export const Header6 = ({ className, ...props }: Props) => {
  return (
    <Heading
      as="h6"
      size="2"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        className
      )}
      {...props}
    />
  );
};
