import { style } from "@vanilla-extract/css";

export const containerCss = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 60;

export const headerCss = style({
  position: "sticky",
  top: 0,
  height: HEADER_HEIGHT,
  width: "100%",
});

export const contentCss = style({
  width: "100%",
  minHeight: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const footerCss = style({
  height: FOOTER_HEIGHT,
  width: "100%",
});
