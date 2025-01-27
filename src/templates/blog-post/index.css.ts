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

  ':hover': {
    backgroundColor: adaptive.accent5,
  },
});

export const nextPostButtonCss = style({
  justifySelf: 'flex-end',
  textDecoration: 'none',
  backgroundColor: adaptive.accent4,
  transition: 'background-color 0.2s ease-in-out',

  ':hover': {
    backgroundColor: adaptive.accent5,
  },
});

export const linkCss = style({
  textDecoration: 'none',
  color: adaptive.accent11,
});
