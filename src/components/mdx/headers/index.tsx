import { Heading } from "@radix-ui/themes";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  "color" | "ref"
>;

export const Header1 = (props: Props) => {
  return <Heading as="h1" size="7" {...props} />;
};

export const Header2 = (props: Props) => {
  return <Heading as="h2" size="6" {...props} />;
};

export const Header3 = (props: Props) => {
  return <Heading as="h3" size="5" {...props} />;
};

export const Header4 = (props: Props) => {
  return <Heading as="h4" size="4" {...props} />;
};

export const Header5 = (props: Props) => {
  return <Heading as="h5" size="3" {...props} />;
};

export const Header6 = (props: Props) => {
  return <Heading as="h6" size="2" {...props} />;
};
