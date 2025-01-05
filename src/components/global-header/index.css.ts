import { globalStyle, style } from "@vanilla-extract/css";
import { adaptive } from "../../styles/colors";
import { LAYOUT_PADDING } from "../global-layout/index.css";

export const HEADER_HEIGHT = 72;

export const headerCss = style({
  height: HEADER_HEIGHT,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: `0 ${LAYOUT_PADDING}px`,
  borderBottom: `1px solid ${adaptive.gray7}`,
});

export const homeLinkCss = style({
  color: adaptive.gray12,
  fontSize: 32,
  fontWeight: 700,
  cursor: "pointer",
});

export const themeButtonCss = style({
  marginLeft: "auto",
  padding: "4px",
  borderRadius: "4px",
  cursor: "pointer",

  ":hover": {
    backgroundColor: adaptive.gray3,
  },
});

export const moonCss = style({
  display: "none",
});

export const sunCss = style({
  display: "none",
});

globalStyle(`${moonCss} > path`, {
  stroke: adaptive.yellow9,
  fill: adaptive.yellow9,
});

globalStyle(`${sunCss} > path`, {
  fill: adaptive.orange11,
  stroke: adaptive.orange10,
});

globalStyle(`html.dark ${moonCss}`, {
  display: "block",
});

globalStyle(`html.light ${sunCss}`, {
  display: "block",
});
