import { globalStyle, style } from '@vanilla-extract/css';

import { adaptive } from '../../../styles/colors';

export const anchorCss = style({
  textDecoration: 'none',
  color: adaptive.accent10,

  ':hover': {
    textDecoration: 'underline',
  },
});

export const autoLinkHeaderCss = style({
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${autoLinkHeaderCss} > span`, {
  width: 20,
  height: 20,
  display: 'flex',
  transform: 'translateY(2px)',
});
