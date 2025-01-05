import { style } from "@vanilla-extract/css";
import { LAYOUT_PADDING } from "../global-layout/index.css";

export const FOOTER_HEIGHT = 60;

export const footerCss = style({
  height: FOOTER_HEIGHT,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: `0 ${LAYOUT_PADDING}px`,
});

export const rightTxtCss = style({
  marginLeft: "auto",
});
