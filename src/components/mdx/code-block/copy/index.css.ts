import { globalStyle, style } from '@vanilla-extract/css';
import { adaptive } from '../../../../styles/colors';

export const buttonCss = style({
  backgroundColor: adaptive.gray11,
  color: adaptive.gray2,
  border: `none`,
  cursor: `pointer`,
  fontSize: '14px',
  transition: `all 0.2s ease-in-out`,

  ':disabled': {
    cursor: `not-allowed`,
  },

  position: `absolute`,
  right: 0,
  zIndex: 1,
  borderRadius: `0 0 0 0.25rem`,
  padding: `0.25rem 0.6rem`,
  width: 'fit-content',
});

globalStyle(`${buttonCss}:not([disabled]):hover`, {
  backgroundColor: adaptive.accent10,
  color: adaptive.gray2,
});
