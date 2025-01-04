import { style } from "@vanilla-extract/css";

export const HEADER_HEIGHT = 60;

export const headerCss = style({
  position: "sticky",
  top: 0,
  height: HEADER_HEIGHT,
  width: "100%",
});
