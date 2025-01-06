import { Text } from "@radix-ui/themes";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { mdxCss } from "../../../styles/mdx.utils";
import { paragraphCss } from "./index.css";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
  "ref"
>;

export const Paragraph = ({ className, children }: Props) => {
  return (
    <Text
      as="p"
      className={clsx(
        mdxCss(["padding", "whiteSpace", "wordBreak"]),
        paragraphCss,
        className
      )}
    >
      {children}
    </Text>
  );
};
