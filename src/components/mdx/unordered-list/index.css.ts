import { globalStyle, style } from '@vanilla-extract/css';
import { listStyleVar } from '../list/index.css';
import { CONTAIN_TASK_LIST_CLASS_NAME } from '../../../constants/mdx';

export const unorderedListCss = style({
  paddingLeft: '24px',

  vars: {
    [listStyleVar]: 'disc',
  },
});

globalStyle(`${unorderedListCss}.${CONTAIN_TASK_LIST_CLASS_NAME}`, {
  paddingLeft: 0,
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
