import { style } from "@vanilla-extract/css";
import { adaptive } from "../../../styles/colors";

export const blockQuoteCss = style({
  padding: "3px 2px",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

export const innerCss = style({
  borderLeft: `3px solid ${adaptive.gray8}`,
  width: "100%",
  padding: "0 14px",
  display: "flex",
});
