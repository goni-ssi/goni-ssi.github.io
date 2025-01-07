import { globalStyle, style } from "@vanilla-extract/css";
import { adaptive } from "../../../styles/colors";
import { paragraphCss } from "../paragraph/index.css";
import { mdxCss } from "../../../styles/mdx.utils";

export const innerCss = style([
  {
    borderLeft: `3px solid ${adaptive.gray12}`,
    width: "100%",
    padding: "0 14px",
    display: "flex",
  },
  ...mdxCss(["padding", "whiteSpace", "wordBreak"]),
]);

globalStyle(`${innerCss} > ${paragraphCss}`, {
  padding: 0,
  margin: 0,
});
