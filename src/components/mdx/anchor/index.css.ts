import { style } from '@vanilla-extract/css';
import { adaptive } from '../../../styles/colors';

export const anchorCss = style({
  textDecoration: 'none',
  color: adaptive.accent10,

  ':hover': {
    textDecoration: 'underline',
  },
});
