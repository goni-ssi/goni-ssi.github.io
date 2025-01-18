import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const listStyleVar = createVar('list-style');

export const listCss = style({
  position: 'relative',
  margin: '4px 0',
  listStyle: listStyleVar,
});

export const todoListCss = style({
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${todoListCss} > input[type="checkbox"]`, {
  marginTop: '6px',
  marginRight: '8px',
});
