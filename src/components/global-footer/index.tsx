import { Text } from "@radix-ui/themes";
import { footerCss, rightTxtCss } from "./index.css";

export const GlobalFooter = () => {
  return (
    <footer className={footerCss}>
      <Text size="3" color="gray" className={rightTxtCss}>
        Goni{"'"}s blog. All rights reserved.
      </Text>
    </footer>
  );
};
