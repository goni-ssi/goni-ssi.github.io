import { globalStyle, style } from '@vanilla-extract/css';

export const menuCss = style({});

globalStyle(`${menuCss} + ${menuCss}`, {
  marginTop: '1.5rem',
});

export const buttonCss = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  width: '100%',
});

export const menuItemWrapperCss = style({
  margin: '0.5rem 1rem',
});

export const buttonIconCss = style({
  transition: 'transform 0.15s ease-in-out',
});

export const selectedButtonIconCss = style({
  transform: 'rotate(180deg)',
});
