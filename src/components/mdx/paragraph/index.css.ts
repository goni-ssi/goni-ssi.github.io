import { globalStyle, style } from '@vanilla-extract/css';

import { mdxCss } from '../../../styles/mdx.utils';

export const paragraphCss = style([
  {
    marginTop: 1,
    marginBottom: 1,
  },
  ...mdxCss(['padding', 'wordBreak']),
]);

globalStyle(`${paragraphCss} + ${paragraphCss}`, {
  marginTop: '12px',
});
