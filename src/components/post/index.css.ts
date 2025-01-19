import { style } from '@vanilla-extract/css';
import { adaptive } from '../../styles/colors';

export const postListContainerCss = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const postItemContainerCss = style({
  transition: 'transform 0.2s',

  ':hover': {
    transform: 'translateY(-4px)',
  },
});

export const postItemLinkCss = style({
  textDecoration: 'none',
});

export const postItemTitleCss = style({
  color: adaptive.gray12,
});

export const postItemDescriptionCss = style({
  marginTop: '0.5rem',
  color: adaptive.gray12,
});

export const postItemDateCss = style({
  marginTop: '0.3rem',
  color: adaptive.gray10,
});
