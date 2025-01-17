import { globalStyle, style } from '@vanilla-extract/css';

export const LAYOUT_PADDING = 20;

export const containerCss = style({
  width: '100%',
  maxWidth: 800,
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
});

export const contentCss = style({
  width: '100%',
  minHeight: 0,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: LAYOUT_PADDING,
});

export const gatsbyRootThemeCss = style({});

globalStyle(`html.dark ${gatsbyRootThemeCss}`, {
  vars: {
    '--color-background': 'rgb(25, 24, 37)',
  },
});
