import { globalStyle, style } from '@vanilla-extract/css';
import { adaptive } from '../../styles/colors';
import { LAYOUT_PADDING } from '../global-layout/index.css';

export const headerCss = style({
  width: '100%',
  padding: `0 ${LAYOUT_PADDING}px`,
  borderBottom: `1px solid ${adaptive.gray7}`,
});

export const topWrapperCss = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginTop: '1.5rem',
});

export const homeLinkCss = style({
  color: adaptive.gray12,
  fontSize: 32,
  fontWeight: 700,
  cursor: 'pointer',
  textDecoration: 'none',
});

export const themeButtonCss = style({
  marginLeft: 'auto',
  padding: '4px',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  ':hover': {
    backgroundColor: adaptive.gray3,
  },
});

export const moonCss = style({
  display: 'none',
});

export const sunCss = style({
  display: 'none',
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
  display: 'block',
});

globalStyle(`html.light ${sunCss}`, {
  display: 'block',
});

export const bottomWrapperCss = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginTop: '1rem',
  marginBottom: 10,
  paddingLeft: 4,
  gap: 16,
});

export const linkCss = style({
  color: adaptive.gray10,
  fontSize: 18,
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    textDecoration: 'underline',
  },
});

export const selectedLinkCss = style({
  color: adaptive.gray12,
});
