import { style } from '@vanilla-extract/css';

import { adaptive } from '../../../styles/colors';

export const hrCss = style({
  width: '100%',
  margin: '6px 0',
  border: `1px solid ${adaptive.gray4}`,
  borderRadius: '1px',
});
