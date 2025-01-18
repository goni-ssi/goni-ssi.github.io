import { gray } from '@radix-ui/colors';
import { globalStyle, style } from '@vanilla-extract/css';

export const buttonCss = style({
  backgroundColor: gray.gray10,
  color: gray.gray12,
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
  backgroundColor: gray.gray8,
  color: gray.gray12,
});
