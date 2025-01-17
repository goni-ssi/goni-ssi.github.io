import { style } from '@vanilla-extract/css';
import { adaptive } from '../../../styles/colors';

export const codeTitleCss = style({
  backgroundColor: adaptive.accent7,
  color: adaptive.gray12,
  fontSize: '0.875rem',
  padding: '0.5rem 1rem',
  fontFamily: 'ml, monospace',
  marginLeft: 0,
  marginRight: 0,
});
