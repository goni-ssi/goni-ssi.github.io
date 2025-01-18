import { globalStyle, style } from '@vanilla-extract/css';
import { listStyleVar } from '../list/index.css';

export const unorderedListCss = style({
  paddingLeft: '24px',

  vars: {
    [listStyleVar]: 'disc',
  },
});

globalStyle(`${unorderedListCss} > ${unorderedListCss}`, {
  vars: {
    [listStyleVar]: 'circle',
  },
});

globalStyle(`${unorderedListCss} > ${unorderedListCss} > ${unorderedListCss}`, {
  vars: {
    [listStyleVar]: 'square',
  },
});
