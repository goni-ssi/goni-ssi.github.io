import { style } from "@vanilla-extract/css";
import { mdxCss } from "../../../styles/mdx.utils";

export const kbdCss = style([
  {
    width: "fit-content",
  },
  ...mdxCss(["padding", "margin", "whiteSpace", "wordBreak"]),
]);
