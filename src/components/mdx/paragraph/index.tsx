import { Text } from "@radix-ui/themes";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { paragraphCss } from "./index.css";

type Props = ComponentPropsWithoutRef<"p">;

export const Paragraph = ({ className, children }: Props) => {
  return (
    <Text as="span" weight="bold" className={clsx(paragraphCss, className)}>
      {children}
    </Text>
  );
};
