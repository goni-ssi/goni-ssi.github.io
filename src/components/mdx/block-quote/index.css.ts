import { globalStyle, style } from "@vanilla-extract/css";
import { adaptive } from "../../../styles/colors";
import { paragraphCss } from "../paragraph/index.css";

export const innerCss = style({
  borderLeft: `3px solid ${adaptive.gray8}`,
  width: "100%",
  padding: "0 14px",
  display: "flex",
});

globalStyle(`${innerCss} > ${paragraphCss}`, {
  padding: 0,
});
