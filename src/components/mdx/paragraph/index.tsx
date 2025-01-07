import { Text } from "@radix-ui/themes";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { paragraphCss } from "./index.css";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
  "ref"
>;

export const Paragraph = ({ className, children }: Props) => {
  return (
    <Text as="p" className={clsx(paragraphCss, className)}>
      {children}
    </Text>
  );
};
