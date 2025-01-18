import { createVar, style } from '@vanilla-extract/css';

export const listStyleVar = createVar('list-style');

export const listCss = style({
  position: 'relative',
  margin: '4px 0',
  listStyle: listStyleVar,
});
