import { globalStyle, style } from '@vanilla-extract/css';

import { mdxCss } from '../../../styles/mdx.utils';
import { paragraphCss } from '../paragraph/index.css';

export const blockQuoteCss = style([
  {
    display: 'flex',
    margin: '3px 2px',
  },
  ...mdxCss(['whiteSpace', 'wordBreak']),
]);

globalStyle(`${blockQuoteCss} > ${paragraphCss}`, {
  padding: 0,
  margin: 0,
});
