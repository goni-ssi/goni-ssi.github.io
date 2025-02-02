import { style } from '@vanilla-extract/css';

import { mdxCss } from '../../../styles/mdx.utils';

export const emCss = style([{}, ...mdxCss(['margin', 'padding', 'whiteSpace', 'wordBreak'])]);
