import { style } from "@vanilla-extract/css";

export const containerCss = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const contentCss = style({
  width: "100%",
  minHeight: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
});
