import { style } from '@vanilla-extract/css';
import { mdxCss } from '../../../styles/mdx.utils';

const headerBaseCss = style({
  display: 'flex',
  alignItems: 'center',
});

export const h1Css = style([
  {
    marginTop: '40px',
    marginBottom: '16px',
  },
  headerBaseCss,
  ...mdxCss(['padding', 'whiteSpace', 'wordBreak']),
]);

export const h2Css = style([
  {
    marginTop: '40px',
    marginBottom: '12px',
  },
  headerBaseCss,
  ...mdxCss(['padding', 'whiteSpace', 'wordBreak']),
]);

export const h3Css = style([
  {
    marginTop: '24px',
    marginBottom: '8px',
  },
  headerBaseCss,
  ...mdxCss(['padding', 'whiteSpace', 'wordBreak']),
]);

export const h4Css = style([
  {
    marginTop: '16px',
    marginBottom: '1px',
  },
  headerBaseCss,
  ...mdxCss(['padding', 'whiteSpace', 'wordBreak']),
]);

export const h5Css = style([
  {
    marginTop: '12px',
    marginBottom: '1px',
  },
  headerBaseCss,
  ...mdxCss(['padding', 'whiteSpace', 'wordBreak']),
]);

export const h6Css = style([
  {
    marginTop: '8px',
    marginBottom: '1px',
  },
  headerBaseCss,
  ...mdxCss(['padding', 'whiteSpace', 'wordBreak']),
]);
