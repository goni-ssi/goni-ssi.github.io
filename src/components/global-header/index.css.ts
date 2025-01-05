import { globalStyle, style } from "@vanilla-extract/css";
import { adaptive } from "../../styles/colors";

export const HEADER_HEIGHT = 60;

export const headerCss = style({
  height: HEADER_HEIGHT,
  width: "100%",
  display: "flex",
  alignItems: "center",
});

export const homeLinkCss = style({
  marginLeft: 20,
  padding: "10px 20px",
  color: adaptive.gray12,
  fontSize: 32,
});

export const darkModeCss = style({
  display: "none",
});

export const lightModeCss = style({
  display: "none",
});

globalStyle(`html.dark ${darkModeCss}`, {
  display: "block",
});

globalStyle(`html.light ${lightModeCss}`, {
  display: "block",
});
