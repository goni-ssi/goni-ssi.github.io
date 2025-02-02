import { globalStyle, style } from '@vanilla-extract/css';

import { adaptive } from '@styles/colors';

export const headerWrapperCss = style({
  marginTop: '32px',
  marginBottom: '20px',
});

export const dateCss = style({
  color: adaptive.gray10,
  marginTop: '8px',
});

export const postNavigationWrapperCss = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  marginTop: '56px',
  marginBottom: '40px',
});

export const prevPostButtonCss = style({
  justifySelf: 'flex-start',
  textDecoration: 'none',
  backgroundColor: adaptive.accent4,
  transition: 'background-color 0.2s ease-in-out',
  paddingLeft: '8px',

  ':hover': {
    backgroundColor: adaptive.accent5,
  },
});

globalStyle(`${prevPostButtonCss} svg`, {
  transform: 'rotate(90deg) translateX(1px)',
});

export const nextPostButtonCss = style({
  justifySelf: 'flex-end',
  textDecoration: 'none',
  backgroundColor: adaptive.accent4,
  transition: 'background-color 0.2s ease-in-out',
  paddingRight: '8px',

  ':hover': {
    backgroundColor: adaptive.accent5,
  },
});

globalStyle(`${nextPostButtonCss} svg`, {
  transform: 'rotate(-90deg) translateX(-1px)',
});

export const linkCss = style({
  textDecoration: 'none',
  color: adaptive.accent11,
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${linkCss} svg > path `, {
  fill: adaptive.accent11,
});

export const badgeWrapperCss = style({
  display: 'flex',
  gap: '4px',
  marginTop: '8px',
});

export const badgeCss = style({
  cursor: 'pointer',
});
