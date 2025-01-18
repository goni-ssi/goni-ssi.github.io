import { style } from '@vanilla-extract/css';
import { listStyleVar } from '../list/index.css';

export const orderedListCss = style({
  paddingLeft: '24px',

  vars: {
    [listStyleVar]: 'decimal',
  },
});
