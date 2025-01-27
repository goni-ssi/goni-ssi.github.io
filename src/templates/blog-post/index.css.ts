import { style } from '@vanilla-extract/css';
import { adaptive } from '../../styles/colors';

export const headerWrapperCss = style({
  marginTop: '32px',
  marginBottom: '20px',
});

export const dateCss = style({
  color: adaptive.gray10,
  marginTop: '8px',
});
